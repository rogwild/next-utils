/**
 * For more info
 * see https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/
 */

import { nodeResolve } from "@rollup/plugin-node-resolve";
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
  plugins: [nodeResolve(), typescript()],
  external: ["react", "react-table"],
};
