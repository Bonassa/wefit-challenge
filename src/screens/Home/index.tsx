
import { View, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { Background } from '../../components/Layout/Background';

export function Home(){
  const navigation = useNavigation();

  return (
    <Background>
      <StatusBar style="auto" />
      <Text style={styles.text} >Home</Text>
      <Button title='Detalhes' onPress={() => navigation.navigate('details')} />
    </Background>
  );
}