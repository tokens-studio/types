import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleOpacityToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.OPACITY,
  string | number,
  Named,
  P
>;
