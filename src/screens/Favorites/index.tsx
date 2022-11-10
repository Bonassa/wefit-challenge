
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function Favorites(){
  const navigation = useNavigation();

  function handleDetails(){
    navigation.navigate('details');
  }

  return (
    <View>
      <Text>Favoritos</Text>
      <Button title="Detalhes" onPress={handleDetails} />
    </View>
  );
}