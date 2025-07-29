import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingItem from "../../components/Settingitem.component";
import SettingsGroup from "../../components/SettingsGroup.component";
import { useSettings } from "../../hooks/useSettings.hoook";
import RingtoneModal from "../../components/RigntonesModal.component";

export default function SettingsScreen() {
  const { settings, updateSettings } = useSettings();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.title}>Configuración</Text>
        <SettingsGroup title="Preferencias de usuario">
          <SettingItem
            title="Vibrar cuando la alarma suene"
            value={settings.vibrarAlarma}
            onToggle={() => updateSettings("vibrarAlarma")}
            showSwitch
          />
          <SettingItem
            title="Volumen ascendente"
            description="El volumen de la alarma aumentará gradualmente"
            value={settings.aumentoVolumen}
            onToggle={() => updateSettings("aumentoVolumen")}
            showSwitch
          />
          <SettingItem
            title="Aviso Previo"
            description="Establece la distancia a partir de la cual empezará a sonar la alarma"
            onPress={() => console.log("Ir a pantalla de aviso previo")}
            showText
          />
        </SettingsGroup>

        <SettingsGroup title="Ajustes generales">
          <SettingItem
            title="Tono de alarma"
            onPress={() => setModalVisible(true)}
            showText
            option={settings.ringTone.name}
          />
          <SettingItem
            title="Volumen del tono"
            onPress={() => console.log("Volumen")}
            showText
            option={settings.volumen}
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

      <RingtoneModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
});
