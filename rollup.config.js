import babel from 'rollup-plugin-babel'
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"
import { terser } from 'rollup-plugin-terser'
const extensions = [".js"];
export default {
    input:'./src/index.js',
    output:{
        file:'./dist/bundle.esm.js',
        format:'esm', //若打包commonjs
        assetFileNames: "[name]-[hash][extname]"
    },
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
          terser()
    ],
    treeshake: {
        moduleSideEffects: false,
      }
}