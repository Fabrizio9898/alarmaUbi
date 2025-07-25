import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.title}>Configuración</Text>
        <View style={styles.boxContainer}>
          <Text style={{ color: "#ffffffb4", paddingLeft: 10 }}>
            Ajustes Generales
          </Text>
          <View style={styles.box}>
            <TouchableHighlight
              underlayColor={"#e4e4e452"}
              onPress={() => console.log("Editar perfil")}
              style={styles.touchables}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.touchableText}>Tono de alarma</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#bbbbbba1",
                  }}
                >
                  {">"}
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={"#e4e4e452"}
              onPress={() => console.log("Editar perfil")}
              style={styles.touchables}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.touchableText}>Tono de alarma</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#bbbbbba1",
                  }}
                >
                  {">"}
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={"#e4e4e452"}
              onPress={() => console.log("Editar perfil")}
              style={styles.touchables}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#ffffffff",
                    fontWeight: "500",
                    fontSize: 15,
                  }}
                >
                  Tono de alarma
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#bbbbbba1",
                  }}
                >
                  {">"}
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={"#e4e4e452"}
              onPress={() => console.log("Editar perfil")}
              style={styles.touchables}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.touchableText}>Tono de alarma</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#bbbbbba1",
                  }}
                >
                  {">"}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    color: "#ffffff",
  },
  viewContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    paddingLeft: 10,
  },
  boxContainer: {
    marginTop: 20,
    gap: 10,
  },
  box: {
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
  },
  touchables: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 3,
  },
  touchableText: { color: "#ffffffff", fontWeight: "500", fontSize: 15 },
});
