import React from 'react';

import Hero from '../../components/Hero';
import Slider from '../../components/Slider';

const Series: React.FC = () => {
  return (
    <>
      <Hero type="tv" id={60735} />
      <Slider type="tv" list="on_the_air" title="Populares na Brunoflix" />
      <Slider type="tv" list="popular" title="Originais Brunoflix" original />
      <Slider type="tv" list="top_rated" title="Em alta" />
      <Slider type="tv" list="airing_today" title="Minha lista" />
    </>
  );
};

export default Series;
