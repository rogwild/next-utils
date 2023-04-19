/**
 * For more info
 * see https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/
 */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import preserveDirectives from "rollup-plugin-preserve-directives";
import pkg from "./package.json";

const config = {
  input: "lib/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
      banner: `'use client';`,
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
    preserveDirectives(),
  ],
  external: [
    ...Object.keys(pkg.dependencies).filter(
      (p) => !["react-markdown"].includes(p)
    ),
    "react",
    "rect-dom",
  ],
  onwarn(warning, warn) {
    if (warning.code !== "MODULE_LEVEL_DIRECTIVE") {
      warn(warning);
    }
  },
};

export default config;
