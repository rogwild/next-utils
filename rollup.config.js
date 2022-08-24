/**
 * For more info
 * see https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/
 */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
  external: [
    "react",
    "react-table",
    "axios",
    "qs",
    "react-use-gesture",
    "next",
    "transition-component",
    "react-spring",
  ],
};
