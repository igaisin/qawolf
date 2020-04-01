module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['./packages'],
  testRegex: '(/test/.*.(test|spec)).(jsx?|tsx?)$',
  testTimeout: 60000,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
