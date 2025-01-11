import {StatusBar} from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight, TouchableNativeFeedback, View
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/*<Image source={require('./assets/icon.png')}/>*/}
      {/*<TouchableWithoutFeedback onPress={() => console.log('tap')}>*/}
      {/*<TouchableOpacity onPress={() => console.log('tap')}> /!* For some reason, it only works for double taps only. *!/*/}
      <TouchableHighlight onPress={() => console.log('tap')}>
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
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View style={{width: 200, height: 70, backgroundColor: 'dodgerblue'}}/>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
