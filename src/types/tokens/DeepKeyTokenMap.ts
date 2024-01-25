import { SingleToken } from './SingleToken.js';

export interface _DeepKeyTokenMap<Named extends boolean = true> {
  [key: string]: _DeepKeyTokenMap<Named> | SingleToken<Named>;
} 

export type DeepKeyTokenMap<Named extends boolean = true> = _DeepKeyTokenMap<Named> & { $type?: string };