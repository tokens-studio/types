import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleLetterSpacingToken<
  Named extends boolean = true,
  P = unknown,
> = SingleGenericToken<TokenTypes.LETTER_SPACING, string, Named, P>;
