import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleColorToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.COLOR,
  string,
  Named,
  P
>;
