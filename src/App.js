import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/101118105?v=4';
const urlToMyProfileGithub = 'https://github.com/Leoo3s';
const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyProfileGithub);
    if (res) {
      await Linking.openURL(urlToMyProfileGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Leonardo sentado com fundo verde"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome Leonardo Santana"
          style={[style.defaultText, style.name]}>
          Leonardo Santana
        </Text>
        <Text
          accessibilityLabel="nickname Leoo3s"
          style={[style.defaultText, style.nickname]}>
          Leoo3s
        </Text>
        <Text
          accessibilityLabel="Descrição Estudante Engenharia de Software | Desenvolvedor Front-end Júnior |
          JavaScript | HTML/CSS | ReactJS | React Native | DIO Campus Expert"
          style={[style.defaultText, style.description]}>
          Estudante Engenharia de Software | Desenvolvedor Front-end Júnior |
          JavaScript | HTML/CSS | ReactJS | React Native | DIO Campus Expert
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, //Expandir para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colorDarkFontGithub,
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
