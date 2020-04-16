import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import axios from 'axios';

export default function AlbumList() {
  useEffect(() => {
    async function fetchAlbums() {
      const { data } = await axios.get(
        'https://rallycoding.herokuapp.com/api/music_albums',
      );
      return data;
    }

    const data = fetchAlbums();
    console.log(data);
  }, []);

  return (
    <View>
      <Text>asddd</Text>
    </View>
  );
}
