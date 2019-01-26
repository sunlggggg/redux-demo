import { _post } from '../utils/request';
import { ADD_CONTENT } from './types';
export default function addContent(data) {

    return async function (dispatch) {
        const res = await _post('https://jsonplaceholder.typicode.com/posts', data)
        console.log('post', res, "dispatch start ...")
        dispatch(
            {
                type: ADD_CONTENT,
                payload: res
            })
        console.log('post', res, "dispatch end ...")
    }
}