import { Alert, Linking, Platform, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../../components/MapView";
import HomeSearchBar from "../../components/HomeSearchBar.component";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocation } from "../../context/locationContext";
import { useEffect } from "react";
import * as Notifications from 'expo-notifications';


export default function HomeScreen() {
  const { location, errorMsg, permissionStatus, requestLocation, startTracking, stopTracking } = useLocation();


  // Manejar el botón de ubicación
  const handleLocationButtonPress = async () => {
    const success = await requestLocation();
    if (!success && errorMsg) {
      Alert.alert(
        'Permiso de ubicación requerido',
        errorMsg,
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Ir a Configuración',
            onPress: () => {
              if (Platform.OS === 'ios') {
                Linking.openURL('app-settings:');
              } else {
                Linking.openSettings();
              }
            },
          },
        ]
      );
    }
  };



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
    <SafeAreaView style={{ flex: 1,position: "relative" }}>
      <Map currentLocation={location}/>
        <View style={styles.safeOverlay}>
          <HomeSearchBar />
        </View>
        <Pressable
        onPress={handleLocationButtonPress}
        style={styles.searchButton}>
          <Ionicons    name={permissionStatus === 'granted' ? 'location' : 'location-outline'}
          size={24}
          color={permissionStatus === 'granted' ? 'blue' : 'gray'}/>
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeOverlay: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  searchButton: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 100,
    right: 20,
    padding: 14,
    borderRadius: 15,
    elevation: 5, // Shadow for Android
    zIndex: 1,
  },
});
