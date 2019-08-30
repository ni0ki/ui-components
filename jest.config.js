module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/config/jestSvgTransform.js'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/config/setupEnzyme.ts'],
  coverageReporters: ['text'],
  moduleNameMapper: {
    '^@globals/(.*)$': '<rootDir>/src/globals/$1',
    '^@atoms/(.*)$': '<rootDir>/src/atoms/$1',
    '@atoms': '<rootDir>/src/atoms/index',
    '^@ions/(.*)$': '<rootDir>/src/ions/$1',
    '@ions': '<rootDir>/src/ions/index',
    '@icons/(.*)$': '<rootDir>/src/icons/icons-defs.svg'
  }
};
