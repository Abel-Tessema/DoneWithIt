import {Button, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button title='Click me'/>
    </SafeAreaView>
  );
}

// const containerStyle = {backgroundColore:'#00ffdd'}; // No validation
const containerStyle = {backgroundColor:'#00ffdd'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
