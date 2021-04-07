import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const type = props.type;
  const content = props.content;
  const onPress = props.onPress;

  //const { type, content, OnPress } = props; // App crashes on click

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}> {content} </Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
