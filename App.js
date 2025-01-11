import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Yahallo!!!');

  return (
    <SafeAreaView style={styles.container}>
      <Text
        numberOfLines={1}
        onPress={handlePress}
      >
        Open up App.js to start working on your app! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias deleniti ex exercitationem labore pariatur vel. Aliquid deleniti natus praesentium
        voluptates?
      </Text>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
