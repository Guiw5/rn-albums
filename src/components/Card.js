import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    borderBottomWidth: 0,
    elevation: 2,
    margin: 10,
  },
});

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Card.defaultProps = {
  children: null,
};
export default Card;
