import React from "react";
import { TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function SearchBar() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push("/search")}
    >
      <MaterialCommunityIcons name="magnify" size={24} color="gray" />
      <TextInput
        style={styles.input}
        placeholder="Buscar un lugar..."
        editable={false}
        pointerEvents="none"
        placeholderTextColor={"#18181798"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
     flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    margin: 16,
    marginBottom: 10,
    shadowColor: "#000",
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "gray",
  },
});
