import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, Platform, Image} from "react-native";

function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.parentView}>
      <View style={styles.buttonsView}>
        <View style={styles.closeButton}/>
        <View style={styles.deleteButton}/>
      </View>
      <Image
        source={require('../../assets/chair.jpg')}
        style={styles.chairImage}
        resizeMode='contain'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  closeButton: {
    backgroundColor: '#E1756F',
    width: 50,
    height: 50,
  },
  deleteButton: {
    backgroundColor: '#82C7C4',
    width: 50,
    height: 50,
  },
  chairImage: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;