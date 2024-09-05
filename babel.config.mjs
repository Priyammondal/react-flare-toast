export default {
  presets: [
    [
      "@babel/preset-env",
      {
        // Transpile modern JavaScript for browsers that need it
        targets: "> 0.25%, not dead", // Target browsers with over 0.25% usage
        useBuiltIns: "usage", // Add only necessary polyfills
        corejs: 3, // Use CoreJS v3 for polyfills
      },
    ],
    "@babel/preset-react", // Transpile JSX and React code
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        // Reduces code duplication by using helpers from a shared library
        corejs: false, // Avoid including core-js since it’s added through useBuiltIns in the preset
        helpers: true, // Use Babel helpers to avoid duplication
        regenerator: true, // Only include the regenerator runtime if needed
      },
    ],
  ],
};
