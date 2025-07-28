import { Modal } from "react-native";

const RingtoneModal = (modalVisible,setModalVisible) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    ></Modal>
  );
};

export default RingtoneModal;
