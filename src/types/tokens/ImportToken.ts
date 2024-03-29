import { SingleToken } from './SingleToken.js';

export type ImportToken<Named extends boolean = true> = SingleToken<
  Named,
  {
    oldValue?: string;
    oldDescription?: string;
  }
>;
