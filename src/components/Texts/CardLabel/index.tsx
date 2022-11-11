
import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";

import { Texting } from '../Texting';

interface CardLabelRootProps {
  children: React.ReactNode;
}

interface CardLabelIconProps {
  haveIcon: boolean;
  iconName?: keyof typeof Ionicons.glyphMap;
  children?: never;
}

interface CardLabelTextProps {
  text: string;
  children?: never;
}

function CardLabelRoot({ children } : CardLabelRootProps) {
  return (
    <View style={styles.root} >
      { children }
    </View>
  )
}

function CardLabelIcon({ iconName, haveIcon } : CardLabelIconProps) {
  if(haveIcon === true && iconName !== undefined) {
    return (
      <Ionicons 
        name={iconName} 
        size={20} 
        style={styles.icon} 
      />
    )
  } else {
    return (
      <View style={styles.circle} />
    )
  }
}

function CardLabelText({ text } : CardLabelTextProps) {
  return (
    <Texting
      style={styles.text}
      text={text}
    />
  )
}

export const CardLabel = {
  Root: CardLabelRoot,
  Icon: CardLabelIcon,
  Text: CardLabelText
}