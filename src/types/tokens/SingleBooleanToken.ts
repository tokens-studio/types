import { TokenTypes } from '../../constants/TokenTypes.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleBooleanToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.BOOLEAN,
  'true' | 'false',
  Named,
  P
>;
