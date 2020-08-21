import React from 'react';
import { useParams } from 'react-router-dom';

import Player from '../../components/Player';

const Watch: React.FC = () => {
  const { id, type } = useParams();

  return <Player videoId={id} type={type} />;
};

export default Watch;
