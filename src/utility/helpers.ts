export function assertUnreachable(_: never): never {
  throw new Error('Unexpected value. Should have been never.');
}
