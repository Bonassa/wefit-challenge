
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import { styles } from "./styles";

interface HeadingProps extends TextProps {
  children?: never;
  text: string;
  style?: StyleProp<TextStyle>;
}

export function Heading({ text, style, ...rest} : HeadingProps){
  return (
    <Text
      style={[styles.heading, style]}
      { ...rest }
    >
      { text }
    </Text>
  )
}