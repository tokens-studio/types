import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleFontFamiliesToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.FONT_FAMILIES,
  string,
  Named,
  P
>;
