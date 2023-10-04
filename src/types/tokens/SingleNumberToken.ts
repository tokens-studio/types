import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleNumberToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.NUMBER,
  string,
  Named,
  P
>;
