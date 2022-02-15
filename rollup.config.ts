/* eslint-disable */
const rollupTypescript = require("@rollup/plugin-typescript");

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs",
    },
    {
      file: "dist/index.mjs",
      format: "es",
    },
  ],
  plugins: [rollupTypescript()],
};
