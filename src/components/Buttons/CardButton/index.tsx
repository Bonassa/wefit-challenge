
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";

import { Texting } from '../../Texts/Texting';

interface CardButtonRootProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

interface CardButtonIconProps {
  iconName: keyof typeof Ionicons.glyphMap;
}

interface CardButtonLabelProps {
  children?: never;
  text: string;
}

function CardButtonRoot({ children, ...rest } : CardButtonRootProps){
  return (
    <TouchableOpacity
      { ...rest }
      style={styles.root}
    >
      { children }
    </TouchableOpacity>
  )
}

function CardButtonIcon({ iconName } : CardButtonIconProps){
  return (
    <Ionicons name={iconName} size={20} style={styles.icon} />
  )
}

function CardButtonLabel({ text } : CardButtonLabelProps){
  return (
    <Texting
      style={styles.label}
      text={text}
    />
  )
}

export const CardButton = {
  Root: CardButtonRoot,
  Icon: CardButtonIcon,
  Label: CardButtonLabel,
}