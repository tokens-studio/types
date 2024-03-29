import { Properties } from '../constants/Properties.js';
import type { TokenTypes } from '../constants/TokenTypes.js';
import { TokenBoxshadowValue, TokenTypographyValue, TokenBorderValue } from './values/index.js';

export type CompositionTokenProperty = keyof typeof Properties;

export type CompositionTokenValue = Partial<
  Record<
    TokenTypes,
    | string
    | number
    | TokenTypographyValue
    | TokenBoxshadowValue
    | TokenBorderValue
    | Array<TokenBoxshadowValue>
  > &
    Record<
      Properties,
      | string
      | number
      | TokenTypographyValue
      | TokenBoxshadowValue
      | TokenBorderValue
      | Array<TokenBoxshadowValue>
    >
>;
