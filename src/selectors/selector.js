// import { createSelector } from 'reselect'
import get from 'lodash/get'

export const getCount = state => get(state, 'reducer.count', 0)
