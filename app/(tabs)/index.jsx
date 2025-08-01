import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../../components/MapView";
import HomeSearchBar from "../../components/HomeSearchBar.component";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocation } from "../../context/locationContext";
import { useEffect } from "react";

export default function HomeScreen() {
  const {
    location,
    errorMsg,
    permissionStatus,
    checkPermissionStatus,
    requestLocation,
    refreshLocation,
  } = useLocation();


  useEffect( () => {
    checkPermissionStatus();
  }, [checkPermissionStatus]);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Map />
      <View style={{ flex: 1,  position: "relative" }}>
        <View style={styles.safeOverlay}>
          <HomeSearchBar />
        </View>
        <Pressable
        onPress={()=>{
          
        }}
        style={styles.searchButton}>
          <Ionicons name="location-outline" size={26} color="black" />
        </Pressable>
      </View>
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
