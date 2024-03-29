import { TokenTypes } from '../../constants/TokenTypes.js';
import { TokenBorderValue } from '../values/index.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleBorderToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.BORDER,
  TokenBorderValue,
  Named,
  P
>;
