import * as React from 'react';
import { Avatar, Card, Button } from 'react-native-paper';
import { StyleSheet, Linking } from 'react-native';

function AlbumDetail({ album }) {
  const { title, artist, thumbnail_image, image, url } = album;

  function handleOnPress() {
    return Linking.openURL(url);
  }

  return (
    <Card elevation={2} style={styles.container}>
      <Card.Title
        title={title}
        subtitle={artist}
        left={() => <Avatar.Image size={40} source={{ uri: thumbnail_image }} />}
      />
      <Card.Cover source={{ uri: image }} />
      <Card.Actions>
        <Button onPress={handleOnPress}>Buy Now</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 4,
  },
});

export default AlbumDetail;
