import * as c from '../constants';

export function increment(count) {
    return {
        type: c.INCREMENT,
        count: count + 1
    }
}

export function decrement(count) {
    return {
        type: c.DECREMENT,
        count: count - 1
    }
}
