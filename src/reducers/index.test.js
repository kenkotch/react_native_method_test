import { createStore } from 'redux'
import { rootReducer } from './index'


const store = createStore(rootReducer)

describe('Root Reducer Tests', () => {
  it('can handle rootReducer', () => {
    expect(store.getState().reducer).toEqual({ count: 0 })
  })
})
