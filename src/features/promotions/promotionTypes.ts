export interface PromotionState {
    tagsList: Tag[] | null;
    promotionsList: Promotion[] | null;
    promotionDetail: Promotion | null;
}

export interface Tag {
    IconUrl: string;
    Id: number;
    Name: string;
    Rank: number;
}

export interface Promotion {
    BrandIconColor: string;
    BrandIconUrl: string;
    BrandPromotionCardParticipationText: string;
    Description: string;
    EndDate: string;
    Id: number;
    ImageUrl: string;
    CountryTimeZone: number;
    RemainingText: string;
    StartDate: string;
    Title: string;
    Type: string;
    CardType: string;
    ScenarioType: string;
    SeoName: string;
    Unavailable: boolean;
    IsMapAvailable: boolean;
    Unvisible: boolean;
    DetailButtonText: string;
    ListButtonText: string | null;
    LuckyDayText: string;
    LuckyDayTextColor: string | null;
    LuckyDayBackgroundColor: string | null;
    ExternalUrl: string | null;
    ExternalType: string | null;
    ExternalRedirectType: string | null;
    ExternalWebviewType: string | null;
    ExternalLoginGate: string | null;
    PromotionDetailItemAreas: PromotionDetailItemArea[];
    Contents: any[];
    PromotionTags: any[];
    PromotionGalleries: PromotionGallery[];
    NextFlowConfigurations: any;
    GameWin: any | null;
    PromotionCardColor: string;
    ListButtonTextBackGroudColor: string;
}

export interface PromotionDetailItemArea {
    Title: string;
    Description: string;
    OpenedIconUrl: string;
    ClosedIconUrl: string;
    UseMapButton: boolean;
    PromotionDetailItems: PromotionDetailItem[];
}

interface PromotionDetailItem {
    Title: string;
    Description: string;
    ImageUrl: string;
}

interface PromotionGallery {
    DocumentUrl: string;
    DocumentType: string;
    CoverImageUrl: string;
}