import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PromotionState, Promotion, Tag } from './promotionTypes';

const initialState: PromotionState = {
  tagsList: [],
  promotionsList: [],
  promotionDetail: null
};

export const promotionSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {
    getTagsList: (state, action: PayloadAction<Tag[]>) => {
        state.tagsList = action.payload;
    },
    getPromotionsList: (state, action: PayloadAction<Promotion[]>) => {
        state.promotionsList = action.payload;
    },
    getPromotionDetail: (state, action: PayloadAction<Promotion>) => {
        state.promotionDetail = action.payload;
    },
  },
});

export const { getTagsList, getPromotionsList, getPromotionDetail } = promotionSlice.actions;

export default promotionSlice.reducer;