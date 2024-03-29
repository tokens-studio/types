import { TokenTypes } from '../../constants/TokenTypes.js';
import { TokenTextCaseValue } from '../values/index.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleTextCaseToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.TEXT_CASE,
  TokenTextCaseValue,
  Named,
  P
>;
