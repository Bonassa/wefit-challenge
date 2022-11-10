
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabRoutes } from "./tab.routes";
import { Details } from "../screens/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="tab" component={TabRoutes} />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}