import React from 'react'
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './Main.styles'

class Main extends React.Component {
  static propTypes = {
    addCount: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    resetCount: PropTypes.func.isRequired
  }

  state = {
    counter: 0
  }

  incrementCounter = number => {
    const { counter } = this.state
    const count = counter + number
    this.setState({ counter: count })
  }

  resetCounter = () => {
    this.setState({ counter: 0 })
  }

  uslessMethodJustForTesting = (message = 'There was no message') => message

  render() {
    const {
      addCount,
      count,
      resetCount
    } = this.props
    const { counter } = this.state
    return (
      <View style={ styles.container }>
        {/* local state counter */}
        <Text style={ styles.subTitle }>
          Counter from local state: { counter }
        </Text>
        <TouchableOpacity
          onPress={ () => this.incrementCounter(1) }
        >
          <Text>
            Increment by 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => this.incrementCounter(4) }
        >
          <Text>
            Increment by 4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ this.resetCounter }
        >
          <Text>
            Reset
          </Text>
        </TouchableOpacity>

        <View style={ styles.space } />

        {/* redux state count */}
        <Text style={ styles.subTitle }>
          Count from redux state: { count }
        </Text>
        <TouchableOpacity
          onPress={ () => addCount() }
        >
          <Text>
            Increment by 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => addCount(5) }
        >
          <Text>
            Increment by 5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => resetCount() }
        >
          <Text>
            Reset
          </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default Main
