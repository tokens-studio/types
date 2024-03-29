import { TokenTypes } from '../../constants/TokenTypes.js';
import { CompositionTokenValue } from '../CompositionTokenProperty.js';
import { SingleGenericToken } from './SingleGenericToken.js';

export type SingleCompositionToken<Named extends boolean = true, P = unknown> = SingleGenericToken<
  TokenTypes.COMPOSITION,
  CompositionTokenValue,
  Named,
  P
>;
