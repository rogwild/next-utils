/**
 * For more info
 * see https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/
 */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import pkg from "./package.json";

export default {
  input: "lib/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    resolve(),
    typescript({
      tsconfig: "tsconfig.lib.json",
      module: "esnext",
    }),
    babel({
      babelHelpers: "runtime",
      skipPreflightCheck: true,
      plugins: [],
      presets: ["next/babel"],
    }),
    commonjs(),
  ],
  external: [
    "next",
    "react",
    "react-table",
    "react-redux",
    "axios",
    "qs",
    "transition-component",
    "react-spring",
    "react-dom",
    "prop-types",
    "react-calendar",
    "@use-gesture/react",
    "@reduxjs/toolkit",
    "@react-spring/web",
  ],
};
