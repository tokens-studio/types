import ts from 'rollup-plugin-ts';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.exports['.'].require,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.exports['.'].import,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    ts({
      tsconfig: 'tsconfig.json',
    }),
  ],
};
