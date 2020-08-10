import React from 'react';

import Hero from '../../components/Hero';
import Slider from '../../components/Slider';

const Movies: React.FC = () => {
  return (
    <>
      <Hero type="movie" id={299534} />
      <Slider type="movie" list="popular" title="Populares na Brunoflix" />
      <Slider
        type="movie"
        list="now_playing"
        title="Originais Brunoflix"
        original
      />
      <Slider type="movie" list="upcoming" title="Assistir novamente" />
      <Slider type="movie" list="top_rated" title="Em alta" />
    </>
  );
};

export default Movies;
