'use strict';

const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

const input = './index.js';
const external = [
  '@sendgrid/client',
  '@sendgrid/helpers',
];

module.exports = [
  {
    // ESM build
    input,
    external,
    output: {
      file: 'dist/esm/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      nodeResolve.default(),
      commonjs(),
    ],
  },
];
