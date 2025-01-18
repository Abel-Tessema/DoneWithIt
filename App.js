import {View} from 'react-native';
import {StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={StyleSheet.create({
      container: {
        backgroundColor: 'white',
        flex: 1, // The parent view has to be a flex container as well.
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', // Aligns items on each line.
        alignContent: 'center', // Aligns the container itself as a whole.
      }
    }).container}>
      <View style={StyleSheet.create({
        container: {
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
        }
      }).container}/>
      <View style={StyleSheet.create({
        container: {
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20, // Has precedence over bottom.
          left: 20,
          // position
          //    - Default value is 'relative'.
          //    - 'relative' positions a component relative to its original position (i.e., top: 0, bottom: 0, left: 0,
          //      right: 0), without affecting other components' layouts.
          //    - 'absolute' positions a component relative to its parent component, and affects the layout of other
          //      components.
          position: 'absolute',
        }
      }).container}/>
      <View style={StyleSheet.create({
        container: {
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }
      }).container}/>
    </View>
  );
}
