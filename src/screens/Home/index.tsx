
import { useState, useCallback, useRef } from 'react';
import { Alert, FlatList, View, Text, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

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
import { DetailProps } from '../../@types/navigation';

function Home(){
  const navigation = useNavigation();
  const [repos, setRepos] = useState<ApiResponse[]>([]);
  const [savedOnStorageRepos, setSavedOnStorageRepos] = useState<ApiResponse[]>([]);
  const { setItem, getItem } = useAsyncStorage('@wefit_repos');

  // Bottom Sheet Variables
  const sheetRef = useRef<BottomSheetModal>(null);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ["30%"];

  const handleOpenBottomSheet = useCallback((index : number) => {
    sheetRef.current?.present(index);
    setIsOpen(true);
  }, [])

  const handleCloseBottomSheet = useCallback(() => {
    sheetRef.current?.dismiss();
    setIsOpen(false);
  }, [])


  useFocusEffect(
    useCallback(() => {
      async function loadRepos(){
        await apiAxios.get('facebook/repos')
        .then( async (json) => {
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

          const storageValues = await getItem();

          if(storageValues) {
            const savedRepos : ApiResponse[] = JSON.parse(storageValues);
            setSavedOnStorageRepos(savedRepos);

            const fullNameOfRepos = savedRepos.map((repo) => repo.full_name);

            futureData = futureData.filter((repo) => {
              return !fullNameOfRepos.includes(repo.full_name);
            })
          }

          setRepos(futureData);
        })
      }

      loadRepos();
    }, [])
  )

  async function handleSaveRepoOnAsyncStorage( repo : ApiResponse ){
    try {
      let jsonValue : string;

      if(savedOnStorageRepos.length !== 0){
        jsonValue = JSON.stringify([...savedOnStorageRepos, repo])
      } else {
        jsonValue = JSON.stringify([repo]);
      }

      await setItem(jsonValue)
      .then(() => {
        let removedRepo = repos.filter(allRepos => allRepos.id !== repo.id);

        setSavedOnStorageRepos([...savedOnStorageRepos, repo]);
        setRepos(removedRepo);
      })
    } catch(error) {
      Alert.alert('Erro', 'Não foi possível favoritar este repositório!');
    }
  }

  return (
    <>
      <StatusBar style="dark" />

      <Header.Root theme='light'>
        <Header.Label text='WeFit' />

        <Header.RightIcon onPress={() => handleOpenBottomSheet(isOpen ? -1 : 0)}>
          <Ionicons name="settings-sharp" size={24} />
        </Header.RightIcon>
      </Header.Root>

      <Background>
        <>
          { isOpen && (
            <View style={styles.overlay} />
          ) }
          <FlatList
            data={repos}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
            renderItem={({item}) => {
              const itemInfosForDetail : DetailProps = {
                ...item,
                savedOnStorage: false
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
                    <CardButton.Root onPress={() => handleSaveRepoOnAsyncStorage(item)}>
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

          <BottomSheetModal
            ref={sheetRef}
            // index={0}
            snapPoints={snapPoints}
            onDismiss={() => setIsOpen(false)}
            enablePanDownToClose={true}
          >
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>

          {/* <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
          >
            <BottomSheetView>

            </BottomSheetView>
          </BottomSheet> */}
        </>
      </Background>
    </>
  );
}

export default gestureHandlerRootHOC(Home);