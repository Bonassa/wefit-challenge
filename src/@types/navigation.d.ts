
import { ApiResponse } from './api';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      details: ApiResponse;
    }
  }
}