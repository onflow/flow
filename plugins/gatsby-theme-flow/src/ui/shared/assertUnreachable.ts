// @see https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking
/* istanbul ignore next */
export function assertUnreachable(value: never): never {
  throw new TypeError(`Unreachable value reached ${value}`);
}
