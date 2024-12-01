export function hasValue<T>(v: T | undefined | null): v is T {
  return v !== null && v !== undefined;
}

export function hasNoValue<T>(v: T | undefined | null): v is undefined | null {
  return v === null || v === undefined;
}
