/**
 * For more info
 * see https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/
 */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
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
    ...Object.keys(pkg.dependencies).filter(
      (p) => !["react-markdown"].includes(p)
    ),
    "react",
    "rect-dom",
  ],
};

export default config;
