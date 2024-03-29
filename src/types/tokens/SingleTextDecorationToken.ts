import { TokenTypes } from '../../constants/TokenTypes.js';
import { TokenTextDecorationValue } from '../values/index.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleTextDecorationToken<
  Named extends boolean = true,
  P = unknown,
> = SingleGenericToken<TokenTypes.TEXT_DECORATION, TokenTextDecorationValue, Named, P>;
