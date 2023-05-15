import { SingleToken } from './SingleToken.js';

export interface DeepKeyTokenMap<Named extends boolean = true> {
  [key: string]: DeepKeyTokenMap<Named> | SingleToken<Named>;
}
