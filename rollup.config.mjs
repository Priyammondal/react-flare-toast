import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx"],
    }),
    terser(),
    postcss(),
  ],
  external: ["react", "react-dom"],
};
