
import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { ApiResponse } from "../../@types/api";

import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Header } from "../../components/Layout/Header";
import { Background } from "../../components/Layout/Background";
import { Card } from "../../components/Layout/Card";
import { Texting } from "../../components/Texts/Texting";
import { CardLabel } from "../../components/Texts/CardLabel";
import { DetailProps } from "../../@types/navigation";

export function Favorites(){
  const navigation = useNavigation();
  const [ savedRepos, setSavedRepos ] = useState<ApiResponse[]>([]);
  const { getItem } = useAsyncStorage('@wefit_repos');

  useFocusEffect(
    useCallback(() => {
      async function readItemsFromStorage(){
        const itens = await getItem();

        if(itens) {
          setSavedRepos(JSON.parse(itens));
        }
      }

      readItemsFromStorage();
    }, [])
  )

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
      <FlatList
        data={savedRepos}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({item}) => {
          const itemInfosForDetail : DetailProps = {
            ...item,
            savedOnStorage: true
          }

          return (
            <Card.Root key={item.id} onPress={() => navigation.navigate('details', itemInfosForDetail)}>
              <Card.Header>
                <Card.Label>
                  <Texting text={item.owner.login + '/'} style={styles.firstLabel} />
                  <Texting text={item.name} style={styles.secondLabel} />
                </Card.Label>
                <Card.Image source={{uri: item.owner.avatar_url}} />
              </Card.Header>

              <Card.Description text={item.description} />

              <Card.Footer>
                <CardLabel.Root>
                  <CardLabel.Icon haveIcon iconName='star' />
                  <CardLabel.Text text={item.stargazers_count.toString()} />
                </CardLabel.Root>

                { item.language && (
                  <CardLabel.Root>
                    <CardLabel.Icon haveIcon={false} />
                    <CardLabel.Text text={item.language} />
                  </CardLabel.Root>
                ) }
              </Card.Footer>
            </Card.Root>
          )
        }}
      />
      </Background>
    </>
  );
}