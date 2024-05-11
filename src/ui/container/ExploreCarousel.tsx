import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExploreCarousel from '../components/ExploreCarousel';
import { RootState } from '../../app/store';

const ExploreCarouselContainer = () => {
  const dispatch = useDispatch();

  const promotionsList = useSelector((state: RootState) => state.promotions.promotionsList);

  return <ExploreCarousel promotionsList={promotionsList}   />;
};

export default ExploreCarouselContainer;