import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const toneFiles = {
  defaultalarm: require('../assets/sounds/alarma1.wav'),
  tone1: require('../assets/sounds/alarma2.mp3'),
};

const CLEAR_ASYNC_STORAGE = true;

const defaultSettings = {
  vibrarAlarma: true,
  aumentoVolumen: true,
  distanceAlert: 300,
  ringTone: {
    name: 'defaultalarm',
    uri: toneFiles.defaultalarm, 
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
        if (typeof parsedSettings.ringTone === 'string') {
          parsedSettings.ringTone = {
            name: parsedSettings.ringTone,
            uri: toneFiles[parsedSettings.ringTone] || toneFiles.defaultalarm,
          };
        } else if (parsedSettings.ringTone && !parsedSettings.ringTone.uri) {
          parsedSettings.ringTone.uri = toneFiles[parsedSettings.ringTone.name] || toneFiles.defaultalarm;
        }
        setSettings({ ...defaultSettings, ...parsedSettings });
      } else {
        await AsyncStorage.setItem('userSettings', JSON.stringify(defaultSettings));
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
        const settingsToSave = {
          ...settings,
          ringTone: {
            name: settings.ringTone.name,
            uri: settings.ringTone.name, 
          },
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
    if (key === 'ringTone') {
      setSettings((prev) => ({
        ...prev,
        ringTone: {
          name: value.name,
          uri: toneFiles[value.name] || toneFiles.defaultalarm,
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