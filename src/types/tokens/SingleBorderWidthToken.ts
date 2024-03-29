import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleBorderWidthToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.BORDER_WIDTH,
  string,
  Named,
  P
>;
