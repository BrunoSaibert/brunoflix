import React from 'react';

import Slider from '../../components/Slider';

const Latest: React.FC = () => {
  return (
    <>
      <Slider type="movie" list="now_playing" title="Novas séries" />
      <Slider type="movie" list="top_rated" title="Em alta" />
      <Slider type="movie" list="popular" title="Estréias da próxima semana" />
      <Slider type="movie" list="upcoming" title="Novos filmes" />
    </>
  );
};

export default Latest;
