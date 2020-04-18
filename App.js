/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Header text="Albums" />
      <AlbumList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
