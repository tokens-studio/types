import { SingleToken } from './SingleToken';

export interface DeepKeyTokenMap<Named extends boolean = true> {
  [key: string]: DeepKeyTokenMap<Named> | SingleToken<Named>;
}
