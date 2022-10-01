
import typescript from '@rollup/plugin-typescript';
import {source, main} from './package.json'

export default {
  input: source,
  output: {
    file: main,
    format: 'cjs'
  },
  plugins: [typescript()]
};