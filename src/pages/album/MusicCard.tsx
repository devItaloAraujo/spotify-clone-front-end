import { SongType } from '../../types';

type PropMusic = {
  music: SongType;
};

function MusicCard({ music }: PropMusic) {
  return (
    <div>
      <h4>
        { music.trackName }
      </h4>
      <audio
        data-testid="audio-component"
        src={ music.previewUrl }
        controls
      >
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
        .
      </audio>
    </div>
  );
}

export default MusicCard;
