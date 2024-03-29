import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleSizingToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.SIZING,
  string,
  Named,
  P
>;
