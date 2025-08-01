import React from "react";
import { TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { globalStyles } from "../styles/global";

export default function HomeSearchBar() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={globalStyles.searchContainer}
      onPress={() => router.push("/search")}
    >
      <MaterialCommunityIcons name="magnify" size={24} color="gray" />
      <TextInput
        style={globalStyles.searchInput}
        placeholder="Buscar un lugar..."
        editable={false}
        pointerEvents="none"
        placeholderTextColor={"#18181798"}
      />
    </TouchableOpacity>
  );
}

