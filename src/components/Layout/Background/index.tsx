
import { View } from "react-native";

import { styles } from './styles';

interface BackgroundProps {
  children: React.ReactNode;
}

export function Background({ children } : BackgroundProps){
  return (
    <View style={styles.container}>
      { children }
    </View>
  )
}