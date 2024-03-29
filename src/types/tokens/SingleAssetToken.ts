import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleAssetToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.ASSET,
  string,
  Named,
  P
>;
