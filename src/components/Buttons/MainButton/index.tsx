
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Texting } from "../../Texts/Texting";

interface MainButtonProps extends TouchableOpacityProps {
  label: string;
  primary: boolean;
}

export function MainButton({ label, primary, ...rest } : MainButtonProps){
  return (
    <TouchableOpacity
      style={[styles.container, primary ? styles.primary : styles.secondary]}
      { ...rest }
    >
      <Texting text={ label } style={styles.label} />
      { primary ? (
        <Ionicons name='star' size={24} style={styles.icon} />
      ) : (
        <Ionicons name='star-outline' size={24} style={styles.icon} />
      ) }
    </TouchableOpacity>
  )
}