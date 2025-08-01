import * as Location from 'expo-location';
import { useState } from 'react';

export function useLocationHook() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);

  // Verificar estado inicial de permisos sin solicitarlos
  const checkPermissionStatus = async () => {
    try {
      let { status } = await Location.getForegroundPermissionsAsync();
      setPermissionStatus(status);
      if (status === 'granted') {
        // Si ya tiene permisos, obtener ubicación inicial
        let currentLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        setLocation(currentLocation);
      }
    } catch (error) {
         console.log("Error al verificar permisos",error);
      setErrorMsg('Error al verificar permisos');
    }
  };

  // Solicitar permisos y obtener ubicación
  const requestLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setPermissionStatus(status);

      if (status !== 'granted') {
        setErrorMsg('Permiso de ubicación denegado');
        return false;
      }

      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation(currentLocation);
      return true;
    } catch (error) {
         console.log("Error al obtener la ubicación",error);
      setErrorMsg('Error al obtener la ubicación');
      return false;
    }
  };

  // Refrescar ubicación si ya tiene permisos
  const refreshLocation = async () => {
    if (permissionStatus !== 'granted') {
      setErrorMsg('No hay permisos para obtener la ubicación');
      return false;
    }

    try {
      let currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation(currentLocation);
      return true;
    } catch (error) {
      console.log("Error al refrescar la ubicación",error);
      
      setErrorMsg('Error al refrescar la ubicación');
      return false;
    }
  };

  return {
    location,
    errorMsg,
    permissionStatus,
    checkPermissionStatus,
    requestLocation,
    refreshLocation,
  };
}