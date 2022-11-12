
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Texting } from '../../Texts/Texting';

interface LinkButtonProps extends TouchableOpacityProps {
  label: string;
}

export function LinkButton({ label, ...rest } : LinkButtonProps){
  return (
    <TouchableOpacity
      style={styles.container}
      { ...rest }
    >
      <Texting text={ label } style={styles.label} />
      <Ionicons name='link' size={24} style={styles.icon} />
    </TouchableOpacity>
  )
}