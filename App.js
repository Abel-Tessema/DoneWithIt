import {Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, useWindowDimensions, View} from 'react-native';
import {useDeviceOrientation} from "@react-native-community/hooks";

export default function App() {
  // console.log(Dimensions.get('screen')); // Doesn't update with orientation
  // console.log(useWindowDimensions()); // Updates with orientation
  // console.log(useDeviceOrientation()); // Updates with orientation
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: orientation === 'landscape' ? '100%' : '30%',
      }}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
