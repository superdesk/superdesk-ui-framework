export function assertNever(x: never): never {
    throw new Error('Unexpected object: ' + x);
}

export function nameof<T>(name: keyof T): string {
    return name.toString();
}
