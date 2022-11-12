
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
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
      await apiAxios.get('facebook/repos')
      .then((json) => {
        let data : ApiResponse[] = json.data;
        let futureData : ApiResponse[] = [];

        data.map((item) => {
          let mapedData : ApiResponse = {
            description: item.description,
            full_name: item.full_name,
            html_url: item.html_url,
            id: item.id,
            language: item?.language,
            name: item.name,
            owner: {
              avatar_url: item.owner.avatar_url,
              login: item.owner.login
            },
            stargazers_count: item.stargazers_count
          }

          futureData.push(mapedData);
        })

        setRepos(futureData)
      })
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
              <Card.Root key={item.id} onPress={() => navigation.navigate('details', item)}>
                <Card.Header>
                  <Card.Label>
                    <Texting text={item.owner.login + '/'} style={styles.firstLabel} />
                    <Texting text={item.name} style={styles.secondLabel} />
                  </Card.Label>
                  <Card.Image source={{uri: item.owner.avatar_url}} />
                </Card.Header>

                <Card.Description text={item.description} />

                <Card.Footer>
                  <CardButton.Root onPress={() => {}}>
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