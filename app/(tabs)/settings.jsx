import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingItem from "../../components/Settingitem.component";
import SettingsGroup from "../../components/SettingsGroup.component";

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
      <SettingsGroup title="Preferencias de usuario">
          <SettingItem
            title="Vibrar cuando la alarma suene"
            value={settings.vibrarAlarma}
            onToggle={() => toggleSetting("vibrarAlarma")}
            showSwitch
            containerStyle={styles.touchables}
          />
          <SettingItem
            title="Volumen ascendente"
            description="El volumen de la alarma aumentará gradualmente"
            value={settings.aumentoVolumen}
            onToggle={() => toggleSetting("aumentoVolumen")}
            showSwitch
            containerStyle={styles.touchables}
          />
          <SettingItem
            title="Aviso Previo"
            description="Establece la distancia a partir de la cual empezará a sonar la alarma"
            onPress={() => console.log("Ir a pantalla de aviso previo")}
            containerStyle={styles.touchables}
          />
        </SettingsGroup>

        <SettingsGroup title="Ajustes generales">
          <SettingItem
            title="Tono de alarma"
            onPress={() => console.log("Elegir tono")}
            containerStyle={styles.touchables}
          />
          <SettingItem
            title="Volumen del tono"
            onPress={() => console.log("Volumen")}
            containerStyle={styles.touchables}
          />
          {/* <SettingItem
            title="Botones de volumen"
            onPress={() => console.log("Volumen físico")}
            containerStyle={styles.touchables}
          />
          <SettingItem
            title="Ajustes de alarma adicionales"
            onPress={() => console.log("Más ajustes")}
            containerStyle={styles.touchables}
          /> */}
        </SettingsGroup>
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
  touchables: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 10,
  },
});

