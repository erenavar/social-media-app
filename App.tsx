import React from 'react';
import { View, StyleSheet, SafeAreaView,StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { colors } from './src/screens/colors';

export default function App() {
  return (

    <View  style={styles.container} >
      <StatusBar barStyle='light-content'/>
      <HomeScreen/>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
