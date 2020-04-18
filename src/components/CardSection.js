import React from 'react';
import { View, StyleSheet } from 'react-native';

function CardSection({ children }) {
  return <View style={styles.container}>{children}</View>;
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
  },
});
export default CardSection;
