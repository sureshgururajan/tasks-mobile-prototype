import * as React from 'react';
import Body from './src/Body';
import Header from './src/Header';
import Footer from './src/Footer';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
      <View style={styles.wrapper}>
        <Header />
        <Body />
        <Footer />
      </View>
  );
}

var styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
  }
});