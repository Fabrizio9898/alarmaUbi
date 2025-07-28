import AsyncStorage from "@react-native-async-storage/async-storage";
import {  createContext, useEffect, useState } from "react";

const  defaultSettings = {
    vibrateOnAlarm: true,
    ascendingVolume: true,
    distanceAlerts:[100,500,1000],
    ringTone:"default",
    
}

export const SettingsContext=createContext()

export const SettingsProvider = ({children})=>{
    const [settings, setSettings] = useState(defaultSettings);

 
   // Cargar o inicializar configuraciones al montar el componente
  useEffect(() => {
    initializeSettings();
  }, []);

  // Guardar configuraciones en AsyncStorage al cambiar
  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem('userSettings', JSON.stringify(settings));
      } catch (error) {
        console.error('Error saving settings:', error);
      }
    };
    // Solo guardamos si settings no es igual a defaultSettings para evitar guardar al inicio
    if (settings !== defaultSettings) {
      saveSettings();
    }
  }, [settings]);


  
 const initializeSettings = async () => {
    try {
      const storedSettings = await AsyncStorage.getItem('userSettings');
      if (storedSettings) {
        // Si hay datos guardados, los usamos
        setSettings(JSON.parse(storedSettings));
      } else {
        // Si no hay datos, guardamos los valores por defecto
        await AsyncStorage.setItem('userSettings', JSON.stringify(defaultSettings));
        setSettings(defaultSettings);
      }
    } catch (error) {
      console.error('Error initializing settings:', error);
      // En caso de error, usamos los valores por defecto
      setSettings(defaultSettings);
    }
  };

  // Función para actualizar configuraciones
  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
