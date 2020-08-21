import React, { useEffect, useState, useCallback } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Watch from '../pages/Watch';
import Series from '../pages/Series';
import Movies from '../pages/Movies';
import Latest from '../pages/Latest';
import MyList from '../pages/MyList';

import Loading from '../components/Loading';

import { getQtdDimensions } from '../helpers/getQtdDimensions';

const Routes: React.FC = () => {
  const [qtdCards, setQtdCards] = useState(2);
  const [isLoading, setIsLoading] = useState(true);

  let location = useLocation();

  const getQtdCardsVisible = useCallback(() => {
    setQtdCards(getQtdDimensions());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    getQtdCardsVisible();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [location, getQtdCardsVisible]);

  return isLoading ? (
    <Loading qtdCards={qtdCards} />
  ) : (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/watch/:type/:id" component={Watch} />
      <Route path="/series" component={Series} />
      <Route path="/movies" component={Movies} />
      <Route path="/latest" component={Latest} />
      <Route path="/my-list" component={MyList} />

      <Route path="*" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
