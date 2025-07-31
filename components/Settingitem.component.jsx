import React from "react";
import { View, Text, Switch, TouchableHighlight } from "react-native";

export default function SettingItem({
  title,
  description,
  value,
  onToggle,
  onPress,
  showSwitch = false,
  option,
  showText = false,
}) {
  return (
    <TouchableHighlight
      underlayColor={"#e4e4e452"}
      onPress={onPress || onToggle}
      style={{
        padding:15,
      }}
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
            flex: 1,
            paddingRight: 10,
            gap: 3,
          }}
        >
          <Text style={{ color: "#ffffffe3", fontWeight: "700", fontSize: 15 ,fontFamily:"Onest",letterSpacing:0.8}}>
            {title}
          </Text>
          {description && (
            <Text style={{ color: "#817979a1",fontFamily:"Onest"}}>{description}</Text>
          )}
        </View>

        {showSwitch ? (
          <Switch
            trackColor={{ false: "#767577", true: "#2372faff" }}
            thumbColor={value ? "#ffffffff" : "#f4f3f4"}
            value={value}
            onValueChange={onToggle}
          />
        ) : showText ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              padding: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                fontFamily:"Onest",
                color: "#bbbbbba1",
              }}
            >
              {option}
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
        ) : null}
      </View>
    </TouchableHighlight>
  );
}
