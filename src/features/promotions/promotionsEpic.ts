import { ofType, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, catchError, startWith } from 'rxjs/operators';
import { getPromotionsList, getPromotionDetail, getTagsList } from './promotionsSlice';
import { fetchPromotionsList, fetchPromotionDetail, fetchTagsList  } from '../../services/api';
import { PromotionsConstants } from './promotionsConstants';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { Tag } from './promotionTypes';
import { RootState } from '@reduxjs/toolkit/query';


export const tagsListEpic: Epic = (action$: any, state: any) =>
    action$.pipe(
      ofType(PromotionsConstants.fetchTagsList),
      mergeMap(() => 
        fetchTagsList().pipe(
          map((ajaxResponse: any) => {
            return getTagsList(ajaxResponse.response)
          }
          ),
          catchError((error: Error) => of({ type: 'promotions/fetchFailed', error: error.message }))
        )
      )
);

export const promotionsListEpic: Epic = (action$: any, state: any) =>
  action$.pipe(
    ofType(PromotionsConstants.fetchPromotionsList),
    mergeMap(() =>
      fetchPromotionsList().pipe(
        map((ajaxResponse: any) => 
            getPromotionsList(ajaxResponse.response)
        ),
        catchError((error: Error) => of({ type: 'promotions/fetchFailed', error: error.message }))
      )
    )
);

export const promotionDetailEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(PromotionsConstants.fetchPromotionDetail),
    mergeMap((action: any) =>
      fetchPromotionDetail(action.payload).pipe(
        map((ajaxResponse: any) => ({
          type: PromotionsConstants.fetchPromotionDetailSuccess,
          payload: ajaxResponse.response
        })),
        catchError((error: Error) => of({
          type: PromotionsConstants.fetchPromotionDetailFailure,
          payload: error.message
        })),
        startWith({ type: PromotionsConstants.fetchPromotionDetailRequest })
      )
    )
  );

  