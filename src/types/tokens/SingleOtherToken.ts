import { TokenTypes } from '../../constants/TokenTypes';
import { SingleGenericToken } from './SingleGenericToken';

export type SingleOtherToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.OTHER,
  string | number,
  Named,
  P
>;
