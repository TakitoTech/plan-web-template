import { ResultAsync } from 'neverthrow';

function defaultErrorFn<E>(e: unknown): E {
    return e as E;
}

export function tryPromise<T, E = unknown>(
    promise: PromiseLike<T>,
    errorFn?: (e: unknown) => E
): ResultAsync<T, E> {
    return ResultAsync.fromPromise<T, E>(promise, errorFn ?? defaultErrorFn);
}

export async function tryPromise2<T>(promise: Promise<T>): Promise<T | unknown> {
    try {
        return await promise;
    } catch (e) {
        return e;
    }
}
