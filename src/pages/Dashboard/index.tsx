import React from 'react';

import Hero from '../../components/Hero';
import Slider from '../../components/Slider';

const Dashboard: React.FC = () => {
  return (
    <>
      <Hero />
      <Slider title="Minha lista" />
      <Slider title="Populares na Brunoflix" />
      <Slider title="Assistir novamente" />
      <Slider title="Em alta" />
    </>
  );
};

export default Dashboard;
