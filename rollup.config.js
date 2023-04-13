import typescript from '@rollup/plugin-typescript';

const conf = {
  input: './src/types/index.ts',
  output: {
    preserveModules: true,
    dir: 'dist',
  },
  plugins: [typescript({ compilerOptions: { emitDeclarationOnly: true } })],
};

export default [
  conf,
  {
    ...conf,
    output: {
      ...conf.output,
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
  },
];
