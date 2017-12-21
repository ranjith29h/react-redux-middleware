import { FETCH_TWEET_USERS } from './types';

export function FetchTweetUser(paginate=0) {
    console.log("am in fetchtweet action");
    return {
        type:FETCH_TWEET_USERS,
        payload:{
            paction:'API',
            url:`http://localhost:3001/${paginate}`,
            method:'GET'
        }
    }
}

