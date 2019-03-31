module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  modulePathIgnorePatterns: ["global.js"],
  setupFiles: [
      './src/setupTests.js',
      './src/Components/feature/ControlPanel/__tests__/global.js',
      './src/Components/feature/Counter/__tests__/global.js',
      './src/Components/feature/Title/__tests__/global.js'
  ],
  testEnvironment: "node",
  snapshotSerializers: ["enzyme-to-json/serializer"]

};
