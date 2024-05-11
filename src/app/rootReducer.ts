import { combineReducers } from '@reduxjs/toolkit';
import promotionsReducer from '../features/promotions/promotionsSlice';

export const rootReducer = combineReducers({
  promotions: promotionsReducer,
});