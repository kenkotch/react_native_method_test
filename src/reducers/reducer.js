import {
  COUNT,
  RESET_COUNT
} from '../constants/types'

const INITIAL_STATE = {
  count: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case RESET_COUNT:
      return {
        ...state,
        count: 0
      }
    default:
      return state
  }
}
