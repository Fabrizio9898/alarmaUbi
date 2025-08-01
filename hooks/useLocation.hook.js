// hooks/useLocationHook.js
import { useState, useEffect, useRef } from 'react';
import {
  checkLocationPermission,
  requestLocationPermission,
  getCurrentLocation,
  startLocationTracking,
  handleLocationError,
} from '../utils/locationUtils';

/**
 * Hook personalizado para gestionar la ubicación del dispositivo.
 * @returns {Object} Objeto con estados y funciones:
 * - location: Ubicación actual.
 * - errorMsg: Mensaje de error, si lo hay.
 * - permissionStatus: Estado de los permisos ('granted', 'denied', etc.).
 * - isTracking: Indica si el seguimiento está activo.
 * - checkPermissionStatus: Verifica el estado de los permisos.
 * - requestLocation: Solicita permisos y obtiene la ubicación.
 * - startTracking: Inicia el seguimiento continuo.
 * - stopTracking: Detiene el seguimiento.
 */
export function useLocationHook() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const watchIdRef = useRef(null);

  /**
   * Verifica el estado actual de los permisos de ubicación.
   * @returns {Promise<boolean>} Retorna `true` si los permisos están otorgados.
   */
  const checkPermissionStatus = async () => {
    try {
      const hasPermission = await checkLocationPermission();
      setPermissionStatus(hasPermission ? 'granted' : 'denied');
      return hasPermission;
    } catch (error) {
      const message = handleLocationError(error);
      setErrorMsg(message);
      setPermissionStatus('denied');
      return false;
    }
  };

  /**
   * Solicita permisos de ubicación y obtiene la ubicación actual.
   * @returns {Promise<boolean>} Retorna `true` si se obtuvo la ubicación.
   */
  const requestLocation = async () => {
    try {
      const { granted, status } = await requestLocationPermission();
      setPermissionStatus(status);
      if (!granted) {
        setErrorMsg('Permiso de ubicación denegado');
        setLocation(null);
        return false;
      }
      const currentLocation = await getCurrentLocation();
      setLocation(currentLocation);
      return true;
    } catch (error) {
      const message = handleLocationError(error);
      setErrorMsg(message);
      setLocation(null);
      return false;
    }
  };

  /**
   * Inicia el seguimiento continuo de la ubicación, solicitando permisos en segundo plano si es necesario.
   * @param {Function} onLocationUpdate - Callback que recibe la nueva ubicación.
   * @param {Object} [destination] - Ubicación destino.
   * @returns {Promise<boolean>} Retorna `true` si el seguimiento comenzó.
   */
  const startTracking = async (onLocationUpdate, destination) => {
    if (isTracking) return true;
    try {
      const hasPermission = await checkPermissionStatus();
      if (!hasPermission) {
        const { granted, status } = await requestLocationPermission(true); // Solicitar permisos en segundo plano
        setPermissionStatus(status);
        if (!granted) {
          setErrorMsg('Permiso de ubicación en segundo plano denegado');
          return false;
        }
      }
      watchIdRef.current = await startLocationTracking(
        (newLocation, dest) => {
          setLocation(newLocation);
          if (onLocationUpdate) {
            onLocationUpdate(newLocation, dest);
          }
        },
        destination
      );
      setIsTracking(true);
      return true;
    } catch (error) {
      const message = handleLocationError(error);
      setErrorMsg(message);
      setIsTracking(false);
      return false;
    }
  };

  /**
   * Detiene el seguimiento continuo de la ubicación.
   */
  const stopTracking = () => {
    if (watchIdRef.current) {
      watchIdRef.current.remove();
      watchIdRef.current = null;
    }
    setIsTracking(false);
  };

  // No limpiamos automáticamente al desmontar para permitir el seguimiento en segundo plano
  // useEffect(() => {
  //   return () => stopTracking();
  // }, []);

  return {
    location,
    errorMsg,
    permissionStatus,
    isTracking,
    checkPermissionStatus,
    requestLocation,
    startTracking,
    stopTracking,
  };
}