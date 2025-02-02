import {Image, ImageBackground, StyleSheet, View, Text} from "react-native";
import colors from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo-red.png')} style={styles.logo}/>
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}/>
      <View style={styles.registerButton}/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {flex: 1, justifyContent: 'flex-end', alignItems: 'center',},
  loginButton: {backgroundColor: colors.primary, width: '100%', height: 70,},
  logo: {width: 100, height: 100,},
  logoContainer: {position: 'absolute', top: 70, alignItems: 'center'},
  registerButton: {backgroundColor: colors.secondary, width: '100%', height: 70,},
});


export default WelcomeScreen;
