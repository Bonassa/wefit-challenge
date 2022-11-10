
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

import { Home } from '../screens/Home';
import { Favorites } from '../screens/Favorites';
import { THEME } from '../theme';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes(){
  return(
    <Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName: keyof typeof Ionicons.glyphMap;
        route.name === 'home' ? iconName = 'logo-github' : iconName = 'star';

        return <Ionicons name={iconName} size={24} color={color} />;
      },
      tabBarLabel: ({ focused }) => {
        let tabName = route.name === 'home' ? 'Repositórios' : 'Favoritos';

        return <Text style={focused ? styles.focusedLabel : styles.label}>{tabName}</Text>
      },
      tabBarActiveTintColor: THEME.COLORS.PRIMARY,
      tabBarInactiveTintColor: THEME.COLORS.SECONDARY,
      headerShown: false,
      tabBarStyle: { marginBottom: 6 }
    })} >
      <Screen name='home' component={Home} />
      <Screen name='favorites' component={Favorites} />
    </Navigator>
  )
}