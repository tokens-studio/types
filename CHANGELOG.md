# @tokens-studio/types

## 0.2.4

### Patch Changes

- 45729e2: Add group property to ThemeObject for multi-dimensional theming support.

## 0.2.3

### Patch Changes

- 4711628: Support nodenext module resolution compliance

## 0.2.2

### Patch Changes

- bb62787: Align SingleSpacingToken parameters, add it to SingleToken union type.

## 0.2.1

### Patch Changes

- d31aa41: Add format property to color modifier.

## 0.2.0

### Minor Changes

- 07e260c: Export enums through CJS/ESM entrypoints, as enums is not a type-level extension on JS, but rather, it contains actual constants (values).

### Patch Changes

- 9adca83: Export missing types.

## 0.1.3

### Patch Changes

- f1d051f: Add and pass Named generic from DeepKeyTokenMap to SingleToken Named generic.

## 0.1.2

### Patch Changes

- 9f4dc96: Add unions of enum types. Move constants re-exports to main entrypoint.

## 0.1.1

### Patch Changes

- 90e52b7: Expand certain types to also allow number to be passed in, if this is possible in CSS for example.

## 0.1.0

### Minor Changes

- ddb97a3: Initial release of reusable Tokens Studio type definitions.
