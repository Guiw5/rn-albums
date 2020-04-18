import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

function Header({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
  },
});

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
