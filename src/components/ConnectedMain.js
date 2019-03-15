import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from './Main'
import * as actions from '../actions/action'

import {
  getCount
} from '../selectors/selector'

const mapStateToProps = state => {
  return {
    count: getCount(state)
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
