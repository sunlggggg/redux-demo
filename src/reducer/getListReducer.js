import { FETCH_POSTS, ADD_CONTENT } from "../action/types";


const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case ADD_CONTENT:
      state.items.unshift(action.payload)
      return {
        ...state,
        item: action.payload
      }
    default:
      return state
  }
}