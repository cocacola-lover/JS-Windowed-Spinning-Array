export default class WindowedSpinningArray<T> {
    private _size;
    private _startingInd;
    private _slidingArr;
    constructor(arr: T[], _size: number, _startingInd?: number);
    private prev;
    private next;
    private sizeError;
    shownBoleanList(): boolean[];
    getWindow(): {
        before: T;
        after: T;
        arr: T[];
    };
    swipeRight(): void;
    swipeLeft(): void;
}
