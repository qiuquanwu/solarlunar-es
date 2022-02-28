import babel from 'rollup-plugin-babel'
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript'
import dts from "rollup-plugin-dts";
const extensions = [".js"];
export default [{
    input:'./src/index.ts',
    output:[{
        file:'./dist/bundle.esm.js',
        format:'esm', //若打包commonjs
        assetFileNames: "[name]-[hash][extname]"
    },
    {
      file:'./dist/bundle.cjs.js',
      format:'cjs', //若打包commonjs
      assetFileNames: "[name]-[hash][extname]"
  }],
    plugins:[
        nodeResolve({
            extensions,
            modulesOnly: true,
          }),
        babel({
            exclude: "node_modules/**",
            extensions,
            runtimeHelpers: true,
          }),
          commonjs(),
          typescript({ tsconfig: './tsconfig.json' }),
          terser()
    ],
    treeshake: {
        moduleSideEffects: false,
      }
},{
  input:'./src/index.ts',
  output:[{
      file:'./dist/bundle.d.ts',
      format:'esm', //若打包commonjs
  }],
  plugins:[
        dts()
  ],
  treeshake: {
      moduleSideEffects: false,
    }
}]