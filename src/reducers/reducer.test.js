import reducer from './reducer'
import {
  COUNT,
  RESET_COUNT
} from '../constants/types'

describe('Reducer Tests', () => {
  it('has a default state', () => {
    expect(reducer(undefined, {
      type: 'unexpected'
    })).toEqual({
      count: 0
    })
  })

  it('can handle COUNT', () => {
    expect(reducer(undefined, {
      type: COUNT,
      payload: 1
    })).toEqual({
      count: 1
    })
  })

  it('can handle RESET_COUNT', () => {
    const INITIAL_STATE = {
      count: 7
    }
    expect(reducer(INITIAL_STATE, {
      type: RESET_COUNT
    })).toEqual({
      count: 0
    })
  })
})
