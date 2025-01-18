import {View} from 'react-native';
import {StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={StyleSheet.create({
      container: {
        backgroundColor: "white",
        flex: 1, // The parent view has to be a flex container as well.
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }
    }).container}>
      <View style={StyleSheet.create({
        container: {
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          alignSelf: 'flex-start',
        }
      }).container}/>
      <View style={StyleSheet.create({
        container: {
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }
      }).container}/>
      <View style={StyleSheet.create({
        container: {
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }
      }).container}/>
    </View>
  );
}
