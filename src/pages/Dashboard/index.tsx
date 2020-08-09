import React from 'react';

import Hero from '../../components/Hero';
import Slider from '../../components/Slider';

const Dashboard: React.FC = () => {
  return (
    <>
      <Hero />
      <Slider type="movie" list="now_playing" title="Minha lista" />
      <Slider type="movie" list="popular" title="Populares na Brunoflix" />
      <Slider type="movie" list="upcoming" title="Assistir novamente" />
      <Slider type="movie" list="top_rated" title="Em alta" />
      <Slider type="tv" list="popular" title="Originais Brunoflix" original />
    </>
  );
};

export default Dashboard;
