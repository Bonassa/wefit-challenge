
import { ColorValue, Text, TextProps } from "react-native";
import { THEME } from "../../../theme";

interface TextingProps extends TextProps {
  size?: 12 | 14 | 16;
  fontFamily?: 'Roboto_400Regular' | 'Roboto_500Medium' | 'Inter_400Regular' | 'Inter_700Bold';
  color?: ColorValue;
  children: React.ReactNode;
}

export function Texting({ children, size = 12, fontFamily = "Inter_400Regular", color = THEME.COLORS.CAPTION_700, ...rest} : TextingProps){
  return (
    <Text
      style={{ fontSize: size, fontFamily: fontFamily, color: color }}
      { ...rest }
    >
      { children }
    </Text>
  )
}