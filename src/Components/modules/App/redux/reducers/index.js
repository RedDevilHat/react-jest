import * as c from '../constants'

const initialState = {
    count: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case c.INCREMENT:
            return {
                count: action.count
            };
        case c.DECREMENT:
            return {
                count: action.count
            };
        default:
            return state
    }
}

export default counter;
