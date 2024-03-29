import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleFontWeightsToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.FONT_WEIGHTS,
  string | number,
  Named,
  P
>;
