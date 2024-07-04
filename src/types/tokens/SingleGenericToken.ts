import { TokenTypes } from '../../constants/TokenTypes.js';
import { ColorModifier } from '../Modifier.js';

type _SingleGenericToken<T, V, Named, P> = {
  type?: T;
  $type?: T;
  value?: V | string; // | string because token value can always be a reference!
  $value?: V | string;
  rawValue?: V | string;
  description?: string;
  $description?: string;
  oldDescription?: string;
  oldValue?: V | string;
  internal__Parent?: string;
  inheritTypeLevel?: number;
  $extensions?: { 
    'studio.tokens'?: { 
      modify?: ColorModifier,
      // this may be set by sd-transforms when aligning the Tokens Studio types to the DTCG types
      // so that certain transforms can still match tokens e.g. letterSpacing -> dimension, but the letterspacing
      // transform only wants to match for letterSpacing tokens, not all dimension tokens.
      originalType?: T;
    },
    [key: string]: unknown
  };
} & (Named extends true
  ? {
      name: string;
    }
  : {
      name?: string;
    }) &
  P;

/**
 * Utility to require one of two optional properties,
 * e.g. $value OR value must exist, but not both.
 * 
 * Explanation, we pass in '$value' | 'value':
 * 1. R extends keyof T = keyof T  ->   means that what is passed in (R) must be/extend keys of first arg (T)
 * 
 * 2. Omit<T, R> means what we pass in (R) is omitted from T
 * 
 * 3. 2nd part of the union simplifies to   ->   { [K in keyof Required<T>]... }['$value'|'value']
 * 
 * 4. which then simplifies to  ->  { $value: ...; value: ...; }['$value'|'value']
 * 
 * 5. which then simplifies to  ->  { 
 *      $value: Required<{ '$value'?: string }> & { 'value'?: undefined }; 
 *      value: Required<{ 'value'?: string }> & { '$value'?: undefined };
 *    }['$value'|'value']
 * 
 * 6. which then simplifies to  ->  { 
 *      $value: { $value: string }; 
 *      value: { value: string };
 *    }['$value'|'value']
 * 
 * 6. and finally  ->  { $value: string } | { value: string }
 * 
 */
type RequireOnlyOne<T, Keys extends keyof T = keyof T> = 
  Omit<T, Keys> & 
  {
    [K in keyof Required<T>]: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

/**
 * `$type` and `type` as well as `$value` and `value`, but for each pair respectively, either
 * the $prop or the without $ prop needs to be present.
 */
export type SingleGenericToken<
  T extends TokenTypes,
  V = string | number,
  Named extends boolean = true,
  P = unknown
> = RequireOnlyOne<_SingleGenericToken<T, V, Named, P>, '$value' | 'value'>;  