# WeFit Challenge
Projeto desenvolvido em processo seletivo para a empresa WiFit. Consiste basicamente de uma aplicação para listar e favoritar repositórios do GitHub.

Já havia desenvolvido um projeto similar para web, usando esta mesma API do GitHub, ele pode ser acessado [clicando aqui](https://github.com/Bonassa/GitRepos).

O arquivo de prototipação criado no figma e disponibilizado pela empresa pode ser acessado neste [link](https://www.figma.com/file/TETzIuf8UnkRGWSyxvPigc/Teste-Android-WeFit---2022?node-id=0%3A1)

## Sobre o Projeto
Para o desenvolvimento foi utilizado um projeto gerenciado do Expo com Typescript.

## Design Pattern
A maioria dos componentes foram criados seguindo o design pattern de composição, gerando maior versatilidade e possibilitando maior reaproveitamentos futuros.

## Bibliotecas Utilizadas

### Google Fonts
Como o projeto conta com duas fontes diferentes (Inter e Roboto), estas duas foram instaladas na aplicação.

```bash
  expo install expo-font @expo-google-fonts/inter @expo-google-fonts/roboto
```

### Navegação de telas
-> React Navigation (https://reactnavigation.org/)

```bash
  yarn add @react-navigation/native

  expo install react-native-safe-area-context react-native-screens
```

Para utilizar a navegação de Stack e Tab
```bash
  yarn add @react-navigation/native-stack

  yarn add @react-navigation/bottom-tabs
```

### Altura de Status Bar
Para conseguir estilizar a área atrás da status bar, foi utilizado a biblioteca `react-native-iphone-x-helper`, que dispõe de duas funções, uma para obter a altura da status bar e outra para saber a altura segura do bottom da tela.

```bash
  expo install react-native-iphone-x-helper
```

### API Fetch
Para realizar a requisição HTTP na API do GitHub, foi utilizado a biblioteca `axios`.

```bash
  expo install axios
```

### Armazenamento
Como um dos requisitos da aplicação é a persistência local das informações dos repositórios favoritados, foi utilizado a biblioteca `async-storage`.

```bash
  expo install @react-native-async-storage/async-storage
```

### Bottom Sheet
Para criar o modal bottom sheet que permite alterar o usuário selecionado no fetch da API do GitHub, foi utilizado a biblioteca `bottom-sheet`.

```bash
  yarn add @gorhom/bottom-sheet@^4

  expo install react-native-reanimated react-native-gesture-handler
```