import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      const { data } = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
      setAlbums(data);
    }
    fetchAlbums();
  }, []);

  return (
    <ScrollView>
      {albums.map(album => (
        <AlbumDetail key={album.title} album={album} />
      ))}
    </ScrollView>
  );
}
export default AlbumList;
