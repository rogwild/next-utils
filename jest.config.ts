import type { Config } from "@jest/types";
// Sync object

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};

export default config;
