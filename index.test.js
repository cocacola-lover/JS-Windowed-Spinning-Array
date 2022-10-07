import WindowedArr from './index.js';

it('getWindow', () => {
    const arr = new WindowedArr([1, 2, 3, 4, 5, 6, 7], 3);
    const response = arr.getWindow();

    expect(JSON.stringify(response)).toBe(JSON.stringify({
        before : 7,
        after : 4,
        arr : [1, 2, 3]
    }));
})

it('swipeRight', () => {
    const arr = new WindowedArr([1, 2, 3, 4, 5, 6, 7], 3);
    arr.swipeRight();

    const response = arr.getWindow();

    expect(JSON.stringify(response)).toBe(JSON.stringify({
        before : 1,
        after : 5,
        arr : [2, 3, 4]
    }));
})

it('swipeLeft', () => {
    const arr = new WindowedArr([1, 2, 3, 4, 5, 6, 7], 3);
    arr.swipeLeft();

    const response = arr.getWindow();

    expect(JSON.stringify(response)).toBe(JSON.stringify({
        before : 6,
        after : 3,
        arr : [7, 1, 2]
    }));
})

it('checkBool', () => {
    const arr = new WindowedArr([1, 2, 3, 4, 5, 6, 7], 4);
    arr.swipeRight();

    const response = arr.shownBoleanList();

    expect(JSON.stringify(response)).toBe(JSON.stringify([
        false, true, true, true, true, false, false
    ]));
})

it('checkStartingPosition', () => {
    const arr = new WindowedArr([1, 2, 3, 4, 5, 6, 7], 3, 6);

    const response = arr.getWindow();

    expect(JSON.stringify(response)).toBe(JSON.stringify({
        before : 6,
        after : 3,
        arr : [7, 1, 2]
    }));
})

it('checkPush', () => {
    const arr = new WindowedArr([1, 2, 3, 4, 5, 6, 7], 3, 1);
    arr.push(3);

    const response = arr.shownBoleanList();

    expect(JSON.stringify(response)).toBe(JSON.stringify([
        false, true, true, true, false, false, false, false
    ]));
});

it('checkPop', () => {
    const arr = new WindowedArr([1, 2, 3, 4, 5, 6, 7], 3, 1);
    arr.pop();

    const response = arr.shownBoleanList();

    expect(JSON.stringify(response)).toBe(JSON.stringify([
        false, true, true, true, false, false,
    ]));
});

it('checkLengthProperty', () => {
    const arr = new WindowedArr([1, 2, 3, 4, 5, 6, 7], 3, 1);
    expect(arr.length).toBe(7);

    arr.push(3);
    expect(arr.length).toBe(8);
})

it('checkSplice', () => {
    const arr = new WindowedArr([1, 2, 3, 4, 5, 6, 7], 3, 0);
    expect(
        JSON.stringify(arr.splice(2, 3, [56]))).toBe(
            JSON.stringify([3, 4, 5])
            );
    
    const response = arr.getWindow();

    expect(JSON.stringify(response)).toBe(JSON.stringify({
        before : 7,
        after : 6,
        arr : [1, 2, 56]
    }))


})