export default class WindowedSpinningArray {
    constructor(arr, _size, _startingInd = 0) {
        this._size = _size;
        this._startingInd = _startingInd;
        if (arr.length < this._size || this._size < 0)
            this.sizeError();
        this._slidingArr = [...arr];
        this._startingInd = this._startingInd % this._slidingArr.length;
    }
    prev(i) {
        return i > 0 ? i - 1 : this._slidingArr.length - 1;
    }
    next(i) {
        return i < this._slidingArr.length - 1 ? i + 1 : 0;
    }
    sizeError() { throw new Error('size cannot be biggger than an array.length or negative'); }
    get length() { return this._slidingArr.length; }
    push(a) { this._slidingArr.push(a); }
    ;
    unshift(a) { this._slidingArr.unshift(a); }
    ;
    pop() {
        if (this._slidingArr.length - 1 < this._size)
            this.sizeError();
        return this._slidingArr.pop();
    }
    shift() {
        if (this._slidingArr.length - 1 < this._size)
            this.sizeError();
        return this._slidingArr.shift();
    }
    splice(index, howmany, args) {
        if (this._slidingArr.length - howmany + args.length < this._size)
            this.sizeError();
        return this._slidingArr.splice(index, howmany, ...args);
    }
    changeWindowSize(newSize) {
        if (this._slidingArr.length < newSize || newSize < 0)
            this.sizeError();
        this._size = newSize;
    }
    shownBoleanList() {
        const ans = Array(this._slidingArr.length).fill(false);
        let j = this._startingInd;
        for (let i = 0; i < this._size; i++) {
            ans[j] = true;
            j = this.next(j);
        }
        return ans;
    }
    getWindow() {
        const ans = [];
        let j = this._startingInd;
        for (let i = 0; i < this._size; i++) {
            ans.push(this._slidingArr[j]);
            j = this.next(j);
        }
        return {
            before: this._slidingArr[this.prev(this._startingInd)],
            after: this._slidingArr[j],
            arr: ans
        };
    }
    swipeRight() { this._startingInd = this.next(this._startingInd); }
    ;
    swipeLeft() { this._startingInd = this.prev(this._startingInd); }
    ;
}
