export enum TokenTypes {
  OTHER = 'other',
  COLOR = 'color',
  BORDER_RADIUS = 'borderRadius',
  SIZING = 'sizing',
  SPACING = 'spacing',
  TEXT = 'text',
  TYPOGRAPHY = 'typography',
  OPACITY = 'opacity',
  BORDER_WIDTH = 'borderWidth',
  STROKE_STYLE = 'strokeStyle',
  BOX_SHADOW = 'boxShadow',
  FONT_FAMILIES = 'fontFamilies',
  FONT_WEIGHTS = 'fontWeights',
  LINE_HEIGHTS = 'lineHeights',
  FONT_SIZES = 'fontSizes',
  LETTER_SPACING = 'letterSpacing',
  PARAGRAPH_SPACING = 'paragraphSpacing',
  PARAGRAPH_INDENT = 'paragraphIndent',
  TEXT_DECORATION = 'textDecoration',
  TEXT_CASE = 'textCase',
  COMPOSITION = 'composition',
  DIMENSION = 'dimension',
  BORDER = 'border',
  ASSET = 'asset',
  BOOLEAN = 'boolean',
  NUMBER = 'number',
}

export type TokenTypesUnion = `${TokenTypes}`;
