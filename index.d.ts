export default class WindowedSpinningArray<T> {
    private _size;
    private _startingInd;
    private _slidingArr;
    constructor(arr: T[], _size: number, _startingInd?: number);
    private prev;
    private next;
    private sizeError;
    get length(): number;
    push(a: T): void;
    unshift(a: T): void;
    pop(): T | undefined;
    shift(): T | undefined;
    splice(index: number, howmany: number, args: T[]): T[];
    changeWindowSize(newSize: number): void;
    shownBoleanList(): boolean[];
    getWindow(): {
        before: T;
        after: T;
        arr: T[];
    };
    swipeRight(): void;
    swipeLeft(): void;
}
