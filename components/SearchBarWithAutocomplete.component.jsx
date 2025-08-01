import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatlistSearchComponent } from "./Flatlist.component";
import { globalStyles } from "../styles/global";
export default function SearchBarWithAutocomplete({ onSelectDestination }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searcHistory, setSearchHistory] = useState([
    { id: "1", place_name: "Obelisco, Buenos Aires" },
    { id: "2", place_name: "Córdoba Capital" },
    { id: "3", place_name: "Mar del Plata" },
    { id: "4", place_name: "Puerto Madero" },
    { id: "5", place_name: "Bariloche, Río Negro" },
  ]);
const [recommendations, setRecommendations] = useState([])

return (
    <SafeAreaView style={styles.safeArea}>
      <View style={globalStyles.searchContainer}>
        <TouchableWithoutFeedback onPress={() => router.back()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="grey" />
        </TouchableWithoutFeedback>
        <TextInput
          style={globalStyles.searchInput}
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
        <FlatlistSearchComponent data={searcHistory}/>
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
  busquedasRecientes: {
    flex: 1,
    backgroundColor: "#fff",
  },
  recientesText: {
    fontSize: 16,
    fontWeight: "900",
    padding: 16,
    fontFamily: "Onest",
  }
});
