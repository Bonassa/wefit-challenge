
import { useState, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ApiResponse } from '../../@types/api';
import apiAxios from '../../services/ApiService';

import { Background } from '../../components/Layout/Background';
import { Header } from '../../components/Layout/Header';
import { Texting } from '../../components/Texts/Texting';
import { Card } from '../../components/Layout/Card';
import { CardButton } from '../../components/Buttons/CardButton';
import { CardLabel } from '../../components/Texts/CardLabel';

export function Home(){
  const navigation = useNavigation();
  const [repos, setRepos] = useState<ApiResponse[]>([]);

  useEffect(() => {
    async function loadRepos(){
      await apiAxios.get('Bonassa/repos')
      .then((json) => setRepos(json.data))
    }

    loadRepos();
  }, [])

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
          data={repos}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          renderItem={({item}) => {
            return (
              <Card.Root key={item.id} onPress={() => Alert.alert('Botão')}>
                <Card.Header>
                  <Card.Label>
                    <Texting text={item.owner.login + '/'} style={styles.firstLabel} />
                    <Texting text={item.name} style={styles.secondLabel} />
                  </Card.Label>
                  <Card.Image source={{uri: item.owner.avatar_url}} />
                </Card.Header>

                <Card.Description text={item.description} />

                <Card.Footer>
                  <CardButton.Root onPress={() => Alert.alert('Favoritou')}>
                    <CardButton.Icon iconName='star' />

                    <CardButton.Label text='Favoritar' />
                  </CardButton.Root>

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