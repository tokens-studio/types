import { SingleToken } from './SingleToken.js';

export type AnyTokenSet<Named extends boolean = true> = Record<string, SingleToken<Named>>;
