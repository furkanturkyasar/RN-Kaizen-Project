import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PromotionState, Promotion, Tag } from './promotionTypes';
import { PromotionsConstants } from './promotionsConstants';

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
  extraReducers: (builder) => {
    builder
      .addCase(PromotionsConstants.fetchPromotionDetailRequest, (state: any) => {
        state.loading = true;
        state.error = null;
        state.promotionDetail = null;
      })
      .addCase(PromotionsConstants.fetchPromotionDetailSuccess, (state: any, action: any) => {
        state.promotionDetail = action.payload;
        state.loading = false;
      })
      .addCase(PromotionsConstants.fetchPromotionDetailFailure, (state: any, action: any) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});

export const { getTagsList, getPromotionsList, getPromotionDetail } = promotionSlice.actions;

export default promotionSlice.reducer;