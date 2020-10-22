import React from 'react';

import Hero from '../../components/Hero';
import Slider from '../../components/Slider';

const Dashboard: React.FC = () => {
  return (
    <>
      <Hero type="tv" id={70523} />
      <Slider
        type="movie"
        list="now_playing"
        title="Continuar assistindo"
        percent
      />
      <Slider
        type="movie"
        list="popular"
        title="Top 10 de hoje no Brasil"
        position
      />
      <Slider type="movie" list="upcoming" title="Assistir novamente" />
      <Slider type="movie" list="top_rated" title="Populares na Brunoflix" />
      <Slider type="tv" list="popular" title="Originais Brunoflix" original />
      <Slider type="tv" list="on_the_air" title="Lançamentos" />
      <Slider type="tv" list="airing_today" title="Em alta" />
      <Slider type="tv" list="top_rated" title="Novidades" />
    </>
  );
};

export default Dashboard;
