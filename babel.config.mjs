export default {
  presets: [
    "@babel/preset-env", // Transpile modern JavaScript to ES5
    "@babel/preset-react", // Transpile JSX and React code
  ],
  plugins: [
    "@babel/plugin-transform-runtime", // Optional: Helps reduce bundle size
  ],
};
