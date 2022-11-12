
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Texting } from "../../Texts/Texting";

interface BottomSheetButtonProps extends TouchableOpacityProps {
  label: string;
  primary: boolean;
}

export function BottomSheetButton({ label, primary, ...rest } : BottomSheetButtonProps){
  return (
    <TouchableOpacity
      style={[styles.container, primary ? styles.primary : styles.secondary]}
      { ...rest }
    >
      <Texting text={ label } style={[styles.label, primary ? styles.labelPrimary : styles.labelSecondary]} />
    </TouchableOpacity>
  )
}