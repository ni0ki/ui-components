module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/config/setupEnzyme.ts'],
  moduleNameMapper: {
    '^@globals/(.*)$': '<rootDir>/src/globals/$1',
    '^@atoms/(.*)$': '<rootDir>/src/atoms/$1',
    '^@ions/(.*)$': '<rootDir>/src/ions/$1'
  }
};
