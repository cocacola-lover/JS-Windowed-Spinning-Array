export default class WindowedSpinningArray<T> {
    private _slidingArr:T[];

    constructor( arr:T[], private _size:number, private _startingInd:number = 0 ){
        if (arr.length < this._size) this.sizeError();

        this._slidingArr = [...arr];
        this._startingInd = this._startingInd % this._slidingArr.length;
    }
    private prev(i:number) {
        return i > 0 ? i-1 : this._slidingArr.length - 1;
    }
    private next(i:number){
        return i < this._slidingArr.length - 1 ? i + 1 : 0;
    }

    private sizeError() {throw new Error('size cannot be biggger than an array.length');}

    shownBoleanList () {
        const ans:boolean[] = Array<boolean>(this._slidingArr.length).fill(false);

        let j = this._startingInd;
        for (let i = 0; i < this._size; i++) {
            ans[j] = true;
            j = this.next(j);
        }
        return ans;
    }
    getWindow () {
        const ans:T[] = [];

        let j = this._startingInd;
        for (let i = 0; i < this._size; i++){
            ans.push(this._slidingArr[j]);
            j = this.next(j);
        }

        return {
            before : this._slidingArr[this.prev(this._startingInd)],
            after : this._slidingArr[j],
            arr : ans
        };
    }
    swipeRight () {this._startingInd = this.next(this._startingInd)};
    swipeLeft () {this._startingInd = this.prev(this._startingInd)};
}