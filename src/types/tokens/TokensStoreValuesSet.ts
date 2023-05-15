import { AnyTokenSet } from './AnyTokenSet.js';
import { AnyTokenList } from './AnyTokenList.js';

// @TODO not sure what this should be / where this is to be used
export type TokensStoreValuesSet =
  | {
      type: 'array';
      values: AnyTokenList;
    }
  | {
      type: 'object';
      values: AnyTokenSet;
    };
