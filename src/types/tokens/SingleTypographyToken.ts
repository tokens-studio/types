import { TokenTypes } from '../../constants/TokenTypes.js';
import { TokenTypographyValue } from '../values/index.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleTypographyToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.TYPOGRAPHY,
  TokenTypographyValue | string,
  Named,
  P
>;
