
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import { styles } from "./styles";

interface TextingProps extends TextProps {
  children?: never;
  text: string;
  style?: StyleProp<TextStyle>;
}

export function Texting({ text, style, ...rest} : TextingProps){
  return (
    <Text
      style={[ styles.texting, style ]}
      { ...rest }
    >
      { text }
    </Text>
  )
}