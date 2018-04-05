declare module 'foreach-end';

interface Array<T> {
  forEachEnd(elementCallback: (value: T, done: () => void, index: number, array: T[]) => void,
             endCallback: () => void, thisArg?: any): void;
  forEachEnd(elementCallback: (value: T, done: () => void, index: number, array: T[]) => void,
             thisArg?: any): Promise<void>;
}
