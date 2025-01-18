import {StyleSheet, View, Image, Text} from "react-native";

function WelcomeScreen() {
  return (
    <View style={styles.parentView}>
      <Image
        source={require('../../assets/background.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      />
      <View style={styles.logoView}>
        <Image
          source={require('../../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.logInView}/>
      <View style={styles.signUpView}/>
    </View>
  );
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  logoView: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
    alignSelf: 'center',
  },
  logInView: {
    backgroundColor: '#E1756F',
    width: '100%',
    height: 70,
  },
  signUpView: {
    backgroundColor: '#82C7C4',
    width: '100%',
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  backgroundImage: {
    width: '100%',
    flex: 1,
  },
});

export default WelcomeScreen;
