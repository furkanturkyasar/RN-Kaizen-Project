import { PromotionsConstants } from "./promotionsConstants";

export const fetchTagsListAction = () => ({ type: PromotionsConstants.fetchTagsList });
export const fetchPromotionsListAction = () => ({ type: PromotionsConstants.fetchPromotionsList });
export const fetchPromotionDetailAction = (id: number) => ({ type: PromotionsConstants.fetchPromotionDetail, payload: id });