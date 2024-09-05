import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import analyze from "rollup-plugin-analyzer";

const isProduction = process.env.NODE_ENV === "production";
export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "esm",
    sourcemap: !isProduction,
  },
  plugins: [
    analyze({ summaryOnly: true }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx"],
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "> 0.25%, not dead",
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
        "@babel/preset-react",
      ],
    }),
    terser(),
    postcss({
      plugins: [cssnano()],
      minimize: true,
    }),
  ],
  external: ["react", "react-dom", "nanoid", "react-icons/ai"],
};
