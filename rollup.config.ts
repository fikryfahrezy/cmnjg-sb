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
import image from "@rollup/plugin-image";
import pkg from "./package.json";

const globPlugins = [
  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**",
  }),
  postcss({
    plugins: [autoprefixer()],
    sourceMap: true,
    modules: true,
    minimize: true,
    extract: true,
  }),
  image(),
  terser(),
  svgr(),
];

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  "react-icons/ri",
];

const output = {
  preserveModules: true,
  preserveModulesRoot: "src",
};

export default [
  {
    input: "src/index.tsx",
    output: {
      format: "es",
      dir: "dist/es",
      ...output,
    },
    external: externals,
    plugins: [
      rollupTypescript({ tsconfig: "./tsconfig-es.json" }),
      ...globPlugins,
    ],
  },
  {
    input: "src/index.tsx",
    output: {
      format: "cjs",
      dir: "dist",
      ...output,
    },
    external: externals,
    plugins: [rollupTypescript(), ...globPlugins],
  },
];
