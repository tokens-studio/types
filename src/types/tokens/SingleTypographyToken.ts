import { TokenTypes } from '../../constants/TokenTypes';
import { TokenTypographyValue } from '../values';
import { SingleGenericToken } from './SingleGenericToken';

export type SingleTypographyToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.TYPOGRAPHY,
  TokenTypographyValue | string,
  Named,
  P
>;

const foo = {} as SingleTypographyToken;

if (typeof foo.value !== 'string') {
  const a = foo.value.lineHeight;
}
