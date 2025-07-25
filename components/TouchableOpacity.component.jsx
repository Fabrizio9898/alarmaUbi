import { Text, TouchableHighlight, View } from "react-native";

export default function TouchableOpacityComponent({
  children,
  onPress,
  style,
}) {
  return (
    <TouchableHighlight
      underlayColor={"#e4e4e452"}
      onPress={() => console.log("Editar perfil")}
      style={{
        padding: 10,
        borderRadius: 5,
      }}
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
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#bbbbbba1" }}>
          {">"}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
