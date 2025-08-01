// utils/locationUtils.js
import * as Location from 'expo-location';

/**
 * Verifica el estado de los permisos de ubicación sin solicitarlos.
 * @returns {Promise<boolean>} Retorna `true` si los permisos están otorgados, `false` en caso contrario.
 * @throws {Error} Lanza un error si falla la verificación de permisos.
 */
export async function checkLocationPermission() {
  try {
    const { status } = await Location.getForegroundPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    throw new Error('Error al verificar permisos de ubicación: ' + error.message);
  }
}

/**
 * Solicita permisos de ubicación en primer plano y, opcionalmente, en segundo plano.
 * @param {boolean} [requestBackground=false] - Si es true, solicita permisos en segundo plano.
 * @returns {Promise<{ granted: boolean, status: string }>} Retorna un objeto con el estado de los permisos.
 * @throws {Error} Lanza un error si falla la solicitud de permisos.
 */
export async function requestLocationPermission(requestBackground = false) {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return { granted: false, status };
    }
    if (requestBackground) {
      const { status: bgStatus } = await Location.requestBackgroundPermissionsAsync();
      return { granted: bgStatus === 'granted', status: bgStatus };
    }
    return { granted: true, status };
  } catch (error) {
    throw new Error('Error al solicitar permisos de ubicación: ' + error.message);
  }
}

/**
 * Obtiene la ubicación actual del dispositivo.
 * @param {Object} [options={ accuracy: Location.Accuracy.Balanced }] - Opciones para la precisión.
 * @returns {Promise<Object>} Retorna un objeto con las coordenadas actuales.
 * @throws {Error} Lanza un error si los servicios de ubicación están desactivados.
 */
export async function getCurrentLocation(options = { accuracy: Location.Accuracy.Balanced }) {
  try {
    const currentLocation = await Location.getCurrentPositionAsync(options);
    return currentLocation;
  } catch (error) {
    throw new Error('Error al obtener la ubicación: Los servicios de ubicación podrían estar desactivados. ' + error.message);
  }
}

/**
 * Inicia el seguimiento continuo de la ubicación del dispositivo.
 * @param {Function} onUpdate - Callback que se ejecuta con cada nueva ubicación.
 * @param {Object} [destination] - Ubicación destino para pasar al callback.
 * @param {Object} [options={ accuracy: Location.Accuracy.Balanced, distanceInterval: 10, timeInterval: 1000 }] - Opciones de seguimiento.
 * @returns {Promise<Object>} Retorna el objeto de suscripción (`watchId`).
 * @throws {Error} Lanza un error si falla el inicio del seguimiento.
 */
export async function startLocationTracking(
  onUpdate,
  destination = null,
  options = { accuracy: Location.Accuracy.Balanced, distanceInterval: 10, timeInterval: 1000 }
) {
  try {
    const watchId = await Location.watchPositionAsync(options, (newLocation) => {
      onUpdate(newLocation, destination);
    });
    return watchId;
  } catch (error) {
    throw new Error('Error al iniciar el seguimiento de ubicación: ' + error.message);
  }
}

/**
 * Maneja errores de ubicación y retorna un mensaje amigable.
 * @param {Error} error - El error capturado.
 * @returns {string} Mensaje de error legible.
 */
export function handleLocationError(error) {
  if (error.message.includes('servicios de ubicación')) {
    return 'Los servicios de ubicación están desactivados. Por favor, actívalos.';
  }
  if (error.message.includes('permisos')) {
    return 'Error con los permisos de ubicación.';
  }
  return 'Error desconocido al procesar la ubicación: ' + error.message;
}