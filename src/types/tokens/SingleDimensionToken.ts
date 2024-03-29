import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleDimensionToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.DIMENSION,
  string,
  Named,
  P
>;
