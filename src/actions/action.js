import {
  COUNT,
  RESET_COUNT
} from '../constants/types'

export const addCount = (count = 1) => {
  return {
    type: COUNT,
    payload: count
  }
}

export const resetCount = () => {
  return {
    type: RESET_COUNT
  }
}
