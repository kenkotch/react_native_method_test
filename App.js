import React from 'react'
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default class App extends React.Component {
  state = {
    counter: 0
  }

  incrementCounterByOne = () => {
    const counter = this.state.counter + 1
    this.setState({ counter })
  }

  incrementCounterByFour = () => {
    const counter = this.state.counter + 4
    this.setState({ counter })
  }

  render() {
    const { counter } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Counter: { counter }</Text>
        <TouchableOpacity
          onPress={ this.incrementCounterByOne }
        >
          <Text>
            Increment by 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ this.incrementCounterByFour }
        >
          <Text>
            Increment by 4
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
}
