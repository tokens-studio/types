import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleParagraphSpacingToken<
  Named extends boolean = true,
  P = unknown,
> = SingleGenericToken<TokenTypes.PARAGRAPH_SPACING, string, Named, P>;
