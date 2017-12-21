import { FETCH_TWEET_USERS } from '../action/types';

export default function(state=[],action) {
    switch (action.type) {
        case FETCH_TWEET_USERS:
            return [...state,...action.payload];
        default:
            return state;
    }
}

