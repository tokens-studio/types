import { TokenTypes } from '../../constants/TokenTypes.js';
import { TokenBoxshadowValue } from '../values/index.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleBoxShadowToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.BOX_SHADOW,
  TokenBoxshadowValue | TokenBoxshadowValue[] | string,
  Named,
  P
>;
