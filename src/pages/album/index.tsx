import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';

function Album() {
  const { id } = useParams();
  const [musics, setMusics] = useState<[AlbumType, ...SongType[]]>();
  useEffect(() => {
    getMusics(id ?? '').then((data) => {
      setMusics(data);
    });
  }, []);
  console.log(musics);
  return (
    <div>
      {
            (musics)
              ? (
                <h2>Musicas existem</h2>
              )
              : (
                <h2>Carregando</h2>
              )
        }
    </div>
  );
}

export default Album;
