
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";

import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Header } from "../../components/Layout/Header";
import { Background } from "../../components/Layout/Background";

export function Favorites(){
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="dark" />

      <Header.Root theme='light'>
        <Header.Label text='WeFit' />

        <Header.RightIcon>
          <Ionicons name="settings-sharp" size={24} />
        </Header.RightIcon>
      </Header.Root>

      <Background>
        
      </Background>
    </>
  );
}