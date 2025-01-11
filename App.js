import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/*<Image source={require('./assets/icon.png')}/>*/}
      <Image
        blurRadius={5}
        loadingIndicatorSource={require('./assets/favicon.png')}
        fadeDuration={1000} // Only for Android
        resizeMode="cover"
        onLoadStart={() => console.log('start')}
        onLoad={() => console.log('loaded')}
        onLoadEnd={() => console.log('end')}
        onError={() => console.log('error')}
        source={{width: 200, height: 300, uri: 'https://picsum.photos/200/300',}}/>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
