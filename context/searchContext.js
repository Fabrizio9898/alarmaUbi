// SearchHistoryContext.js
import { createContext,  useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Valor inicial por defecto para el historial
const defaultHistory = [];

export const SearchHistoryContext = createContext({
  searchHistory: defaultHistory,
  selectedSearch: null,
  addSearch: () => {},
  clearHistory: () => {},
});

export const SearchHistoryProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState(defaultHistory);

  // Función para inicializar o cargar el historial
  const initializeHistory = async () => {
    try {
      const storedHistory = await AsyncStorage.getItem('searchHistory');
      if (storedHistory) {
        // Si hay datos guardados, los usamos
        setSearchHistory(JSON.parse(storedHistory));
      } else {
        // Si no hay datos, guardamos el historial vacío
        await AsyncStorage.setItem('searchHistory', JSON.stringify(defaultHistory));
        setSearchHistory(defaultHistory);
      }
    } catch (error) {
      console.error('Error initializing search history:', error);
      setSearchHistory(defaultHistory);
    }
  };

  // Cargar o inicializar historial al montar el componente
  useEffect(() => {
    initializeHistory();
  }, []);

  // Guardar historial en AsyncStorage al cambiar
  useEffect(() => {
    const saveHistory = async () => {
      try {
        await AsyncStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      } catch (error) {
        console.error('Error saving search history:', error);
      }
    };
    if (searchHistory !== defaultHistory) {
      saveHistory();
    }
  }, [searchHistory]);

  const addSearch = (location) => {
    setSearchHistory((prev) => {
      const newHistory = [
        { id: Date.now(), location, timestamp: new Date().toISOString() },
        ...prev,
      ].slice(0, 10); // Limitar a 10 búsquedas
      return newHistory;
    });
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <SearchHistoryContext.Provider value={{ searchHistory, addSearch, clearHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};
