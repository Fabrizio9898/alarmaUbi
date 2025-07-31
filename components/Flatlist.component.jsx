import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { globalStyles } from "../styles/global";

export const FlatlistSearchComponent = ({ data }) => {
  return (
    <FlatList
      data={data.slice(0, 10)}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          android_ripple={{ color: "#dadada52" }}
          style={styles.touchables}
        >
          <View style={styles.itemContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="clock-time-four-outline"
                size={20}
                color="black"
              />
            </View>
            <Text style={globalStyles.searchHistoryText}>
              {item.place_name}
            </Text>
          </View>
        </Pressable>
      )}
      ListEmptyComponent={() => (
        <Text style={styles.emptyText}>No hay búsquedas recientes</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
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
  emptyText: {
    textAlign: "center",
    padding: 16,
    color: "blue",
  },
});
