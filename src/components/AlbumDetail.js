import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

function AlbumDetail({ album }) {
  const { title, artist, thumbnail_image, image, url } = album;

  function handleOnPress() {
    return Linking.openURL(url);
  }

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnailContent} source={{ uri: thumbnail_image }} />
        </View>
        <View styles={styles.textContainer}>
          <Text style={styles.textContent}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageContent} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={handleOnPress}>Buy Now</Button>
      </CardSection>
    </Card>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContent: {
    fontSize: 18,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  thumbnailContent: {
    height: 50,
    width: 50,
  },
  imageContent: {
    height: 325,
    flex: 1,
  },
});

AlbumDetail.defaultProps = {
  album: null,
};

AlbumDetail.propTypes = {
  album: PropTypes.objectOf(PropTypes.any),
};

export default AlbumDetail;
