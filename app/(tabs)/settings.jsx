import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [settings, setSettings] = useState({
    vibrarAlarma: true,
    aumentoVolumen: true,
  });
  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.title}>Configuración</Text>
        <View style={styles.boxContainer}>
          <Text style={{ color: "#ffffffb4", paddingLeft: 10 }}>
            Preferencias de usuario
          </Text>
          <View style={styles.box}>
            <TouchableHighlight
              underlayColor={"#e4e4e452"}
              onPress={() => toggleSetting("vibrarAlarma")}
              style={styles.touchables}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.touchableText}>
                  Vibrar cuando la alarma suene
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#2372faff" }}
                  thumbColor={settings.vibrarAlarma ? "#ffffffff" : "#f4f3f4"}
                  value={settings.vibrarAlarma}
                  onValueChange={() => toggleSetting("vibrarAlarma")}
                />
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
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 3,
                    flex:1,
                    paddingRight: 10,
                  }}
                >
                  <Text style={styles.touchableText}>Aviso Previo</Text>
                  <Text style={{color:"#817979a1",textAlign:"left",flexWrap:"wrap"}}>Establece la distancia a partir de la cual empezará a sonar la alarma</Text>
                </View>
                {/* <Switch
                  trackColor={{ false: "#767577", true: "#2372faff" }}
                  thumbColor={settings.avisoPrevio ? "#ffffffff" : "#f4f3f4"}
                  onValueChange={() => toggleSetting("avisoPrevio")}
                  value={settings.avisoPrevio}
                /> */}
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
                  <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 3,
                    flex:1,
                    paddingRight: 10,
                  }}
                >
                  <Text style={styles.touchableText}>Volumen ascendente</Text>
                  <Text style={{color:"#817979a1",textAlign:"left",flexWrap:"wrap"}}>El volumen de la alarma aumentará gradualmente</Text>
                </View>
                <Switch
                  trackColor={{ false: "#767577", true: "#2372faff" }}
                  thumbColor={settings.aumentoVolumen ? "#ffffffff" : "#f4f3f4"}
                  onValueChange={() => toggleSetting("aumentoVolumen")}
                  value={settings.aumentoVolumen}
                  
                />
              </View>
            </TouchableHighlight>

           
          </View>
        </View>
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
                <Text style={styles.touchableText}>Volumen del tono</Text>
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
                  Botones de volumen
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
                <Text style={styles.touchableText}>
                  Ajuste de alarma adcionales
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
    marginBottom: 20,
    gap: 10,
  },
  box: {
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
  },
  touchables: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 10,
  },
  touchableText: { color: "#ffffffff", fontWeight: "500", fontSize: 15 },
});
