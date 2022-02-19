/* eslint-disable */
/**
 * Ref:
 * https://stackoverflow.com/a/61786669/12976234
 * https://www.mixmax.com/engineering/rollup-externals
 * https://florian.ec/blog/rollup-scss-css-modules/
 */
import rollupTypescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import svgr from "@svgr/rollup";
import autoprefixer from "autoprefixer";
import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      format: "es",
      dir: "dist",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    rollupTypescript(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      modules: true,
      minimize: true,
    }),
    terser(),
    svgr(),
  ],
};
