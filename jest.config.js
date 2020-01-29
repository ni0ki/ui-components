module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/config/setupEnzyme.ts'],
  coverageReporters: ['text'],
  moduleNameMapper: {
    '^@typings/(.*)$': '<rootDir>/src/typings/$1',
    '^@utility/(.*)$': '<rootDir>/src/utility/$1',
    '^@atoms/(.*)$': '<rootDir>/src/atoms/$1',
    '@atoms': '<rootDir>/src/atoms/index',
    '^@ions/(.*)$': '<rootDir>/src/ions/$1',
    '@ions': '<rootDir>/src/ions/index',
    '@colors': '<rootDir>/src/colors/colors.ts',
    '@colors/*': '<rootDir>/src/colors/*'
  }
};
