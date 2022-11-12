
import { ApiResponse } from './api';

export interface DetailProps extends ApiResponse {
  savedOnStorage: boolean
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      details: DetailProps;
    }
  }
}