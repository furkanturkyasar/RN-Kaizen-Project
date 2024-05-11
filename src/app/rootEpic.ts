
import { combineEpics } from 'redux-observable';
import { promotionDetailEpic, promotionsListEpic, tagsListEpic } from '../features/promotions/promotionsEpic';

export const rootEpic = combineEpics(
    tagsListEpic,
    promotionsListEpic,
    promotionDetailEpic,
);
