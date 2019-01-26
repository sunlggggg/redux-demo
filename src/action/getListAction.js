import { _get } from '../utils/request';
import { FETCH_POSTS } from './types';
export default function getList() {
    console.log('postAction')
    return async function (dispatch) {
        dispatch({
            type: FETCH_POSTS,
            payload: await _get('https://jsonplaceholder.typicode.com/posts')
        })
    }
}