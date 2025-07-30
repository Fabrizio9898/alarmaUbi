import { StyleSheet } from "react-native";
import { View } from "react-native"; // Asegurate de usar react-native
import SearchBarWithAutocomplete from "../components/SearchBarWithAutocomplete.component";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchBarWithAutocomplete />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});