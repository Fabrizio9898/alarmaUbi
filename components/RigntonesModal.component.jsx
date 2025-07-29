import { Modal, StyleSheet, Text, View } from "react-native";
import { RINGTONES } from "../constants/settingsOptions.constants";
import SettingItem from "./Settingitem.component";
import { SafeAreaView } from "react-native-safe-area-context";
const RingtoneModal = (modalVisible, setModalVisible) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView style={styles.modalContainer}>
      <View>
        <View>
          {RINGTONES.map((ringtone, index) => (
            <SettingItem
              key={index}
              title={ringtone.name}
              onPress={() => {
                // Aquí se puede manejar la selección del tono
                console.log(`Tono seleccionado: ${ringtone.name}`);
                setModalVisible(false);
              }}
            />
          ))}
        </View>
      </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center", 
    alignItems: "center",
  },
});

export default RingtoneModal;
