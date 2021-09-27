import {
    SET_RECENT_POSTS,
} from '../actions/types';

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
                const resultsPosts = action.payload;
                return {
                    ...state, 
                    resultsPosts
                }
        default:
            return state;
    }
}