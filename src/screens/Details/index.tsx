
import { useState } from 'react';
import { View, Linking, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

import { DetailProps } from '../../@types/navigation';
import { ApiResponse } from '../../@types/api';

import { Background } from "../../components/Layout/Background";
import { Header } from "../../components/Layout/Header";
import { Heading } from "../../components/Texts/Heading";
import { Texting } from "../../components/Texts/Texting";
import { CardLabel } from "../../components/Texts/CardLabel";
import { LinkButton } from "../../components/Buttons/LinkButton";
import { MainButton } from '../../components/Buttons/MainButton';

export function Details(){
  const navigation = useNavigation();
  const route = useRoute();
  const repo = route.params as DetailProps;
  const { setItem, getItem } = useAsyncStorage('@wefit_repos');
  const [savedOnStorage, setSavedOnStorage] = useState(repo.savedOnStorage);

  async function handleViewRepositorie(){
    const supported = await Linking.canOpenURL(repo.html_url);

    if(supported) {
      await Linking.openURL(repo.html_url);
    } else {
      Alert.alert('Link Inválido', 'Não foi possível abrir o caminho deste repositório');
    }
  }

  async function handleFavoriteToggle(){
    const storageValues = await getItem();

    if(savedOnStorage){
      if(storageValues){
        const savedRepos : ApiResponse[] = JSON.parse(storageValues);
  
        const filtredRepos = savedRepos.filter(repos => repos.full_name !== repo.full_name);
  
        await setItem(JSON.stringify(filtredRepos))
        .then(() => setSavedOnStorage(false));
      }
    } else {
      if(storageValues){
        const savedRepos : ApiResponse[] = JSON.parse(storageValues);
        let jsonValue;

        if(savedRepos.length !== 0){
          jsonValue = JSON.stringify([...savedRepos, repo])
        } else {
          jsonValue = JSON.stringify([repo]);
        }

        await setItem(jsonValue)
        .then(() => setSavedOnStorage(true));
      }
    }
  }

  return (
    <Background>
      <StatusBar style="light" />

      <Header.Root theme="dark">
        <Header.LeftIcon onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} style={styles.headerIcon} />
        </Header.LeftIcon>

        <Header.Label text="Detalhes" style={styles.headerLabel} />
      </Header.Root>

      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <Heading text={repo.owner.login + '/'} style={styles.firstHeading} />
            <Heading text={repo.name} style={styles.secondHeading} />
          </View>

          <View style={styles.mainValue}>
            <Texting text={repo.description} style={styles.mainText} />
          </View>

          { repo.language && (
            <CardLabel.Root>
              <CardLabel.Icon haveIcon={false} circleSize={12} />
              <CardLabel.Text text={repo.language} style={styles.languageLabel} />
            </CardLabel.Root>
          ) }
        </View>

        <View style={styles.footer}>
          <LinkButton 
            label="Ver repositório" 
            onPress={handleViewRepositorie} 
          />

          <MainButton 
            label={savedOnStorage ? 'Desfavoritar' : 'Favoritar'} 
            primary={!savedOnStorage}
            onPress={handleFavoriteToggle}
          />
        </View>
      </View>
    </Background>
  );
}