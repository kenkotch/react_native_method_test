import 'react-native'
import React from 'react'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import {
  addCount,
  resetCount
} from './action'

import {
  COUNT,
  RESET_COUNT
} from '../constants/types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions', () => {
  it('should dispatch addCount with no number', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(addCount())

    const actions = store.getActions()
    const expectedPayload = {
      type: COUNT,
      payload: 1
    }
    expect(actions).toEqual([expectedPayload])
  })

  it('should dispatch addCount with 5', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(addCount(5))

    const actions = store.getActions()
    const expectedPayload = {
      type: COUNT,
      payload: 5
    }
    expect(actions).toEqual([expectedPayload])
  })

  it('should dispatch resetCount', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(resetCount())

    const actions = store.getActions()
    const expectedPayload = {
      type: RESET_COUNT
    }
    expect(actions).toEqual([expectedPayload])
  })
})
