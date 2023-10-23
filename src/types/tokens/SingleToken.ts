import { SingleColorToken } from './SingleColorToken.js';
import { SingleBorderRadiusToken } from './SingleBorderRadiusToken.js';
import { SingleTextToken } from './SingleTextToken.js';
import { SingleSpacingToken } from './SingleSpacingToken.js';
import { SingleTypographyToken } from './SingleTypographyToken.js';
import { SingleOpacityToken } from './SingleOpacityToken.js';
import { SingleBorderWidthToken } from './SingleBorderWidthToken.js';
import { SingleBoxShadowToken } from './SingleBoxShadowToken.js';
import { SingleFontFamiliesToken } from './SingleFontFamiliesToken.js';
import { SingleFontWeightsToken } from './SingleFontWeightsToken.js';
import { SingleLineHeightsToken } from './SingleLineHeightsToken.js';
import { SingleLetterSpacingToken } from './SingleLetterSpacingToken.js';
import { SingleFontSizesToken } from './SingleFontSizesToken.js';
import { SingleParagraphSpacingToken } from './SingleParagraphSpacingToken.js';
import { SingleTextDecorationToken } from './SingleTextDecorationToken.js';
import { SingleTextCaseToken } from './SingleTextCaseToken.js';
import { SingleOtherToken } from './SingleOtherToken.js';
import { SingleCompositionToken } from './SingleCompositionToken.js';
import { SingleDimensionToken } from './SingleDimensionToken.js';
import { SingleBorderToken } from './SingleBorderToken.js';
import { SingleAssetToken } from './SingleAssetToken.js';
import { SingleSizingToken } from './SingleSizingToken.js';
import { SingleBooleanToken } from './SingleBooleanToken.js';
import { SingleNumberToken } from './SingleNumberToken.js';

export type SingleToken<Named extends boolean = true, P = unknown> =
  | SingleColorToken<Named, P>
  | SingleBorderRadiusToken<Named, P>
  | SingleTextToken<Named, P>
  | SingleTypographyToken<Named, P>
  | SingleOpacityToken<Named, P>
  | SingleBorderWidthToken<Named, P>
  | SingleBoxShadowToken<Named, P>
  | SingleFontFamiliesToken<Named, P>
  | SingleFontWeightsToken<Named, P>
  | SingleLineHeightsToken<Named, P>
  | SingleLetterSpacingToken<Named, P>
  | SingleFontSizesToken<Named, P>
  | SingleParagraphSpacingToken<Named, P>
  | SingleTextDecorationToken<Named, P>
  | SingleTextCaseToken<Named, P>
  | SingleSpacingToken<Named, P>
  | SingleOtherToken<Named, P>
  | SingleBorderToken<Named, P>
  | SingleCompositionToken<Named, P>
  | SingleDimensionToken<Named, P>
  | SingleSizingToken<Named, P>
  | SingleAssetToken<Named, P>
  | SingleBooleanToken<Named, P>
  | SingleNumberToken<Named, P>
