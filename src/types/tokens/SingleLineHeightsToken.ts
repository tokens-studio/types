import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleLineHeightsToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.LINE_HEIGHTS,
  string | number,
  Named,
  P
>;
