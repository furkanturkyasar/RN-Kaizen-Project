import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tags, { TagsProps } from '../components/Tags';
import { RootState } from '../../app/store';

const TagsContainer = () => {
  const dispatch = useDispatch();

  const tags = useSelector((state: RootState) => state.promotions.tagsList);

  return <Tags tags={tags}  />;
};

export default TagsContainer;