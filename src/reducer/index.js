import { combineReducers } from 'redux';

import tweetUser from './tweetUser';

const reducer = combineReducers({
    tweetUser:tweetUser
});

export default reducer;