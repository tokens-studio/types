export const enum ColorModifierTypes {
  LIGHTEN = 'lighten',
  DARKEN = 'darken',
  MIX = 'mix',
  ALPHA = 'alpha',
}

export type ColorModifierUnion = `${ColorModifierTypes}`;
