import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleOtherToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.OTHER,
  string | number,
  Named,
  P
>;
