import {
  Alert,
  Linking,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../../components/MapView";
import HomeSearchBar from "../../components/HomeSearchBar.component";
import { useLocation } from "../../context/locationContext";
import LocationButton from "../../components/Buttons/LocationButton";
import { useEffect } from "react";

export default function HomeScreen() {
  
  /**
   * Inicia el seguimiento continuo hacia un destino.
   */
  // const handleStartTracking = async () => {
  //   const exampleDestination = { coords: { latitude: -34.6, longitude: -58.4 } }; // Ejemplo
  //   setDestination(exampleDestination);
  //   const success = await startTracking((newLocation, dest) => {
  //     console.log('Ubicación actualizada:', newLocation);
  //     // Aquí podés verificar si el usuario llegó al destino
  //     if (dest && Math.abs(newLocation.coords.latitude - dest.coords.latitude) < 0.001) {
  //       Alert.alert('¡Llegaste!', 'Has llegado a tu destino.');
  //       stopTracking();
  //     }
  //   }, exampleDestination);
  //   if (!success) {
  //     Alert.alert('Error', errorMsg);
  //   }
  // };

  // /**
  //  * Detiene el seguimiento continuo.
  //  */
  // const handleStopTracking = async () => {
  //   stopTracking();
  //   setDestination(null);
  // };

  // Solicitar permisos de notificaciones al montar
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Notifications.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       Alert.alert('Permiso de notificaciones requerido', 'Necesitamos permisos para enviar alarmas.');
  //     }
  //   })();
  // }, []);

  

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <Map />
      <View style={styles.safeOverlay}>
        <HomeSearchBar />
      </View>
      <LocationButton
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeOverlay: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
});
