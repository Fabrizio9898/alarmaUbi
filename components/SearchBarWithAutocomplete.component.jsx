import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchBarWithAutocomplete({ onSelectDestination }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([
    { id: "1", place_name: "Obelisco, Buenos Aires" },
    { id: "2", place_name: "Córdoba Capital" },
    { id: "3", place_name: "Mar del Plata" },
    { id: "4", place_name: "Puerto Madero" },
    { id: "5", place_name: "Bariloche, Río Negro" },
  ]);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.searchContainer}>
        <TouchableWithoutFeedback onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="grey" />
        </TouchableWithoutFeedback>
        <TextInput
          style={styles.input}
          placeholder="Buscar un lugar..."
          value={query}
          onChangeText={setQuery}
          autoFocus={true}
          cursorColor={"#40c73bad"}
          placeholderTextColor={"#18181798"}
        />
      </View>
            <View style={styles.separator} />
      <View style={styles.busquedasRecientes}>
        <Text style={styles.recientesText}>Recientes</Text>
        <FlatList
          data={suggestions.slice(0, 10)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable android_ripple={{ color: "#dadada52" }} style={styles.touchables}>
              <View style={styles.itemContainer}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="clock-time-four-outline"
                    size={20}
                    color="black"
                  />
                </View>
                <Text style={styles.suggestionText}>{item.place_name}</Text>
              </View>
            </Pressable>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>No hay búsquedas recientes</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
    separator: {
    padding: 5, 
    backgroundColor: "#f0f0f0",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    margin: 15,
    shadowColor: "#000",
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
  },
  busquedasRecientes: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  recientesText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
  },
  touchables: {
    padding: 16,
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  iconContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
    padding: 8,
    alignItems: "center",
  },
  suggestionText: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flex: 1,
  },
  emptyText: {
    textAlign: "center",
    padding: 16,
    color: "blue",
  },
});