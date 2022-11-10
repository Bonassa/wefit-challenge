
import { ColorValue, Text, TextProps } from "react-native";
import { THEME } from "../../../theme";

interface HeadingProps extends TextProps {
  size?: 20 | 16;
  fontFamily?: 'Roboto_400Regular' | 'Roboto_500Medium' | 'Inter_400Regular' | 'Inter_700Bold';
  color: ColorValue;
  children: React.ReactNode;
}

export function Heading({ children, size = 20, fontFamily = "Roboto_500Medium", color = THEME.COLORS.CAPTION_900, ...rest} : HeadingProps){
  return (
    <Text
      style={{ fontSize: size, fontFamily: fontFamily, color: color }}
      { ...rest }
    >
      { children }
    </Text>
  )
}