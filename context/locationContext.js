// LocationContext.js
import React, { createContext, useContext } from 'react';
import { useLocationHook } from '../hooks/useLocation.hook';

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const locationData = useLocationHook();
  return (
    <LocationContext.Provider value={locationData}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation debe usarse dentro de un LocationProvider');
  }
  return context;
}