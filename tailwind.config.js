/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  content: [
    `./src/**/*.{html,js,jsx,tsx}`,
    `./src/**/**/*.{html,js,jsx,tsx}`,
    `./pages/*.{html,js,jsx,tsx}`,
    `./pages/**/*.{html,js,jsx,tsx}`,
    `./node_modules/@rogwild/next-utils/src/components/**/*.{html,js,jsx}`,
    `./node_modules/@rogwild/next-utils/dist/index.js`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: `class`,
};
