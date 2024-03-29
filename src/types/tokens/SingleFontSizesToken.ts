import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleFontSizesToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.FONT_SIZES,
  string,
  Named,
  P
>;
