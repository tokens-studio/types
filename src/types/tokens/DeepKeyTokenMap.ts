import { SingleToken } from './SingleToken';

export interface DeepKeyTokenMap {
  [key: string]: DeepKeyTokenMap | SingleToken;
}
