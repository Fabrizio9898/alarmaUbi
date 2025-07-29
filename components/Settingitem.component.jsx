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
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 10,
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
          <Text style={{ color: "#ffffffff", fontWeight: "500", fontSize: 15 }}>
            {title}
          </Text>
          {description && (
            <Text style={{ color: "#817979a1" }}>{description}</Text>
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
              gap: 5,
              padding: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
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
