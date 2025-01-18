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
        alignItems: 'center', // Aligns items on each line.
        alignContent: 'center', // Aligns the container itself as a whole.
      }
    }).container}>
      <View style={StyleSheet.create({
        container: {
          backgroundColor: "dodgerblue",
          width: 400,
          height: 100,
          // flexBasis
          //    - Sets the size (width or height) in the direction of the main axis.
          //    - Takes priority (over width or height) regardless of position in the code.
          //    - Needs reload (on Expo) to take effect.
          // flexBasis: 100,
          // flexGrow
          //    - Takes the available space on the main axis.
          //    - Same as setting flex.
          // flexGrow: 1,
          // flex: 1,
          // flexShrink
          //    - Shrink to the available space so that all the others can fit on the line.
          //    - Same as setting flex to a negative value.
          // flexShrink: 1,
          // flex: -1,
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
