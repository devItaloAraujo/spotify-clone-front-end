import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import MusicCard from './MusicCard';

function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState<AlbumType>();
  const [musics, setMusics] = useState<SongType[]>();
  useEffect(() => {
    getMusics(id ?? '').then((data) => {
      setAlbum(data[0]);
      const songs = data.slice(1, data.length) as SongType[];
      setMusics(songs);
    });
  }, []);
  return (
    <div>
      {
            (musics && album)
              && (
                <div>
                  <div>
                    <h2 data-testid="artist-name">{album.artistName}</h2>
                    <h2 data-testid="album-name">{album.collectionName}</h2>
                    <img src={ album.artworkUrl100 } alt="album" />
                  </div>
                  <div>
                    { musics.map((music) => {
                      return (
                        <MusicCard key={ music.trackId } music={ music } />
                      );
                    }) }
                  </div>
                </div>
              )
        }
      {
          (!album)
          && (
            <h2>Carregando</h2>
          )
        }
    </div>
  );
}

export default Album;
