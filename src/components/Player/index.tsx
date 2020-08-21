import React, { useEffect, useState, useCallback } from 'react';

import * as S from './styles';

interface PlayerProps {
  videoId: number;
  type: string;
}

interface DataProps {
  key: string;
}

const Player: React.FC<PlayerProps> = ({ videoId, type }) => {
  const [data, setData] = useState<DataProps>({ key: '' } as DataProps);

  const getData = useCallback(async () => {
    await fetch(
      `https://api.themoviedb.org/3/${type}/${videoId}/videos?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => {
        response.results.length && setData(response.results[0]);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <S.Container
      title="player"
      data-testid="player"
      src={`http://www.youtube.com/embed/${data.key}?autoplay=1&mute=0`}
    />
  );
};

export default Player;
