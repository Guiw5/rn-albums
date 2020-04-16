/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Header text="Albums" />
        <AlbumList />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
