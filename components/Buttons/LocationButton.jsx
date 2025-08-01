import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocation } from "../../context/locationContext";

export default function LocationButton() {
  const {permissionStatus,location,requestLocation }=useLocation()

   const handlePress = async () => {
    await requestLocation();
  };
  return (
    <Pressable
      onPress={handlePress}
      style={{
        backgroundColor: "white",
        position: "absolute",
        bottom: 100,
        right: 20,
        padding: 14,
        borderRadius: 15,
        elevation: 5,
        zIndex: 1,
      }}
    >
      {permissionStatus !== "granted" || !location ? (
        <Ionicons name="location-outline" size={24} color="gray" />
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "white", // borde blanco
          }}
        >
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: "blue", // círculo azul
            }}
          />
        </View>
      )}
    </Pressable>
  );
}
