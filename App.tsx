
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { NavigationContainer } from '@react-navigation/native';

import { Loading } from './src/components/Loading';

import { Routes } from './src/routes';

export default function App() {
  const [ fontLoader ] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <>
      { fontLoader ? <Routes /> : <Loading /> }
    </>
  );
}
