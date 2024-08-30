import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs", // This output format is CommonJS for Node.js usage
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
    terser(), // Optional: Minify the output
    postcss(),
  ],
  external: ["react", "react-dom"], // Exclude React and ReactDOM from the bundle
};
