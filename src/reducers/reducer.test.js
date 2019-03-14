import reducer from './reducer'
import {
  COUNT
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
      type: COUNT
    })).toEqual({
      count: 1
    })
  })
})
