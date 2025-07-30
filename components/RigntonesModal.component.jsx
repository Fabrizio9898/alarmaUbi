import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RINGTONES } from "../constants/settingsOptions.constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSettings } from "../hooks/useSettings.hoook"; // Importa el hook

const RingtoneModal = ({ modalVisible, setModalVisible }) => {
  const { settings, updateSettings } = useSettings(); // Obtén settings y updateSettings
  console.log('settings',settings.ringTone.name);

  return (
    <Modal
      animationType="slide"
      backdropColor={"rgba(0,0,0,0.5)"}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {RINGTONES.map((ringtone, index) => (
              <View key={index}>
                <TouchableHighlight
                  underlayColor={"#e4e4e452"}
                  onPress={() => {
                    // Actualiza el tono seleccionado en AsyncStorage
                    updateSettings("ringTone", ringtone);
                    console.log(`Tono seleccionado: ${ringtone.name}`);
                    setModalVisible(false);
                  }}
                  style={[
                    styles.touchable,
                    // Aplica fondo azul si el tono es el seleccionado
                    settings.ringTone.name === ringtone.name && styles.selected,
                  ]}
                >
                  <Text style={styles.ringtoneText}>{ringtone.name}</Text>
                </TouchableHighlight>
              </View>
            ))}
          </View>
          
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
    margin: 20,
  },
  touchable: {
    paddingLeft: 15,
    paddingRight: 40,
    paddingVertical: 20,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: "#007AFF", // Fondo azul para el tono seleccionado
  },
  ringtoneText: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 15,
    alignSelf: "center",
    paddingRight: 20,
  },
});

export default RingtoneModal;
