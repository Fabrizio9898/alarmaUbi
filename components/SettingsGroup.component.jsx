import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsGroup({ title, children }) {
  return (
    <View style={styles.boxContainer}>
      <Text style={{ color: "#ffffffb4", paddingLeft: 10 }}>{title}</Text>
      <View style={{ backgroundColor: "#2b2b2b", borderRadius: 10 }}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: 20,
    marginBottom: 20,
    gap: 10,
  }
});
