// context/settingsContext.js
import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mapa de tonos
const toneFiles = {
  Clásico: require('../assets/sounds/alarma1.wav'),
  Fuerte: require('../assets/sounds/alarma2.mp3'),
};

// Cambia a false cuando quieras mantener los datos
const CLEAR_ASYNC_STORAGE = true;

const defaultSettings = {
  vibrarAlarma: true,
  aumentoVolumen: true,
  distanceAlert: 300,
  ringTone: {
    name: 'Clásico',
    uri: toneFiles.Clásico,
  },
  volumen: '100%',
};

export const SettingsContext = createContext({
  settings: defaultSettings,
  updateSettings: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);

  const initializeSettings = async () => {
    try {
      if (CLEAR_ASYNC_STORAGE) {
        await AsyncStorage.removeItem('userSettings');
        console.log('AsyncStorage cleared');
      }

      const storedSettings = await AsyncStorage.getItem('userSettings');
      if (storedSettings) {
        const parsedSettings = JSON.parse(storedSettings);
        // Manejar ringTone: si es string o tiene name, reconstruir uri
        if (parsedSettings.ringTone) {
          const ringToneName = typeof parsedSettings.ringTone === 'string' 
            ? parsedSettings.ringTone 
            : parsedSettings.ringTone.name || 'Clásico';
          parsedSettings.ringTone = {
            name: ringToneName,
            uri: toneFiles[ringToneName] || toneFiles.Clasico,
          };
        }
        console.log('Settings loaded from AsyncStorage:', parsedSettings);
        
        // Combinar con defaultSettings
        setSettings({ ...defaultSettings, ...parsedSettings });
      } else {
        // Guardar valores por defecto con ringTone como string
        await AsyncStorage.setItem('userSettings', JSON.stringify({
          ...defaultSettings,
          ringTone: defaultSettings.ringTone.name,
        }));
        setSettings(defaultSettings);
      }
    } catch (error) {
      console.error('Error initializing settings:', error);
      setSettings(defaultSettings);
    }
  };

  useEffect(() => {
    initializeSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      try {
        // Guardar ringTone como string
        const settingsToSave = {
          ...settings,
          ringTone: settings.ringTone.name,
        };
        await AsyncStorage.setItem('userSettings', JSON.stringify(settingsToSave));
      } catch (error) {
        console.error('Error saving settings:', error);
      }
    };
    if (settings !== defaultSettings) {
      saveSettings();
    }
  }, [settings]);

  const updateSettings = (key, value = null) => {
    console.log(`Updating setting: ${key} with value:`, value);
    if (key === 'ringTone') {
      setSettings((prev) => ({
        ...prev,
        ringTone: {
          name: value.name,
          uri: toneFiles[value.name] || toneFiles.Clasico,
        },
      }));
    } else {
      setSettings((prev) => ({
        ...prev,
        [key]: value !== null ? value : !prev[key],
      }));
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

