import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Carregando from '../carregando';
import { AlbumType } from '../../types';

function Search() {
  const [artist, setArtist] = useState('');
  const [isArtistInvalid, setIsArtistInValid] = useState(true);
  const [wasClicked, setWasClicked] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [fetchEnded, setFetchEnded] = useState(false);
  const [artistSaved, setArtistSaved] = useState('');

  const handleName = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setArtist(target.value);
    setIsArtistInValid(target.value.length < 2);
  };

  const handleClick = () => {
    setWasClicked(true);
    setFetchEnded(false);
    searchAlbumsAPI(artist).then((data) => {
      setAlbums(data);
      setFetchEnded(true);
      console.log(wasClicked, fetchEnded, data);
    });
    setArtistSaved(artist);
    setArtist('');
  };

  return (

    <div>
      <div>
        <input
          type="text"
          placeholder="Nome do Artista"
          data-testid="search-artist-input"
          value={ artist }
          onChange={ handleName }
        />
        <button
          data-testid="search-artist-button"
          disabled={ isArtistInvalid }
          onClick={ handleClick }
        >
          Procurar
        </button>
      </div>
      {
        (wasClicked && fetchEnded && albums.length > 0)
          && (
            <div>
              <h2>{`Resultado de álbuns de: ${artistSaved}`}</h2>
              {albums.map((item: AlbumType) => {
                return (
                  <div key={ item.collectionId }>
                    <img src={ item.artworkUrl100 } alt={ item.collectionName } />
                    <Link
                      data-testid={ `link-to-album-${item.collectionId}` }
                      to={ `/album/${item.collectionId}` }
                    >
                      <h3>{ item.collectionName }</h3>
                    </Link>
                    <h4>{ item.artistName }</h4>
                  </div>
                );
              })}
            </div>
          )
      }
      {
        (wasClicked && fetchEnded && albums.length === 0)
          && (
            <h2>Nenhum álbum foi encontrado</h2>
          )
      }
      {
        (wasClicked && !fetchEnded)
        && (<Carregando />)
      }
    </div>
  );
}
export default Search;
