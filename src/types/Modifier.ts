import { ColorModifierTypes } from '../constants/ColorModifierTypes.js';
import { ColorSpaceTypes } from '../constants/ColorSpaceTypes.js';

interface Modifier<T extends string, V> {
  type: T;
  value: V;
}
interface ColorGenericModifier<T extends ColorModifierTypes, V> extends Modifier<T, V> {
  space: ColorSpaceTypes;
  format: string;
}

export type LightenModifier = ColorGenericModifier<ColorModifierTypes.LIGHTEN, string>;
export type DarkenModifier = ColorGenericModifier<ColorModifierTypes.DARKEN, string>;
export interface MixModifier extends ColorGenericModifier<ColorModifierTypes.MIX, string> {
  color: string;
}
export type AlphaModifier = ColorGenericModifier<ColorModifierTypes.ALPHA, string>;

export type ColorModifier = LightenModifier | DarkenModifier | MixModifier | AlphaModifier;
