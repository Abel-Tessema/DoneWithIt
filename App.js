import {Alert, Button, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='Click me'
        // onPress={() => alert('Button clicked')}
        // onPress={() => Alert.alert(
        //   'Custom Title',
        //   'Custom message',
        //   [
        //     {text: 'Yes', onPress: () => console.log('Yes')},
        //     {text: 'No', onPress: () => console.log('No')},
        //   ]
        // )}
        onPress={() => Alert.prompt( // May only work on iOS.
          'Custom Title',
          'Custom message',
          text => console.log(text),
        )}
        color='green'
      />
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
