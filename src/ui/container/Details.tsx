import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Details from '../components/Details';
import { RootState } from '../../app/store';

const DetailsContainer = () => {

  const detail = useSelector((state: RootState) => state.promotions.promotionDetail);

  return <Details detail={detail}  />;
};

export default DetailsContainer;