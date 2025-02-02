import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'node_modules/taichi.js/src/taichi.ts',
    output: [
      {
        format: 'es',
        file: `dist/taichi.mjs`
      }
    ],
    plugins: [
      typescript()
    ]
  }
];