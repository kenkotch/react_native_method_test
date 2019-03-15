import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Main from './Main'

configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    addCount: jest.fn(),
    count: 0,
    resetCount: jest.fn()
  }
  const enzymeWrapper = shallow(<Main { ...props } />)
  return {
    props,
    enzymeWrapper
  }
}

describe('Main Tests', () => {
  it('Main renders the same way every time', () => {
    const tree = renderer.create(
      <Main
        addCount={ jest.fn() }
        count={ 0 }
        resetCount={ jest.fn() }
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('incrementCounter should add 1 to local state counter', () => {
    const wrapper = shallow(
      <Main
        addCount={ jest.fn() }
        count={ 0 }
        resetCount={ jest.fn() }
      />
    )
    const instance = wrapper.instance()
    expect(wrapper.state('counter')).toBe(0)
    instance.incrementCounter(1)
    expect(wrapper.state('counter')).toBe(1)
  })

  it('incrementCounterByFour should add 4 to local state counter', () => {
    const wrapper = shallow(
      <Main
        addCount={ jest.fn() }
        count={ 0 }
        resetCount={ jest.fn() }
      />
    )
    const instance = wrapper.instance()
    expect(wrapper.state('counter')).toBe(0)
    instance.incrementCounter(4)
    expect(wrapper.state('counter')).toBe(4)
  })

  it('local state resetCounter', () => {
    const wrapper = shallow(
      <Main
        addCount={ jest.fn() }
        count={ 0 }
        resetCount={ jest.fn() }
      />
    )
    const instance = wrapper.instance()
    instance.incrementCounter(8)
    expect(wrapper.state('counter')).toBe(8)
    instance.resetCounter()
    expect(wrapper.state('counter')).toBe(0)
  })

  it('onPress local state incrementCounter(1)', () => {
    const wrapper = shallow(
      <Main
        addCount={ jest.fn() }
        count={ 0 }
        resetCount={ jest.fn() }
      />
    )
    wrapper.find('TouchableOpacity').first().props().onPress()
    expect(wrapper.state('counter')).toBe(1)
  })

  it('onPress local state incrementCounter(4)', () => {
    const wrapper = shallow(
      <Main
        addCount={ jest.fn() }
        count={ 0 }
        resetCount={ jest.fn() }
      />
    )
    wrapper.find('TouchableOpacity').at(1).props().onPress()
    expect(wrapper.state('counter')).toBe(4)
  })

  it('onPress addCount()', () => {
    const { enzymeWrapper, props } = setup()
    const input = enzymeWrapper.find('TouchableOpacity').at(3)
    input.props().onPress()
    expect(props.addCount.mock.calls.length).toBe(1)
  })

  it('onPress addCount(5)', () => {
    const { enzymeWrapper, props } = setup()
    const input = enzymeWrapper.find('TouchableOpacity').at(4)
    input.props().onPress()
    expect(props.addCount.mock.calls.length).toBe(1)
  })

  it('onPress resetCount()', () => {
    const { enzymeWrapper, props } = setup()
    const input = enzymeWrapper.find('TouchableOpacity').at(5)
    input.props().onPress()
    expect(props.addCount.mock.calls.length).toBe(0)
  })

  it('uslessMethodJustForTesting', () => {
    const wrapper = shallow(
      <Main
        addCount={ jest.fn() }
        count={ 0 }
        resetCount={ jest.fn() }
      />
    )
    const instance = wrapper.instance().uslessMethodJustForTesting()
    expect(instance).toEqual('There was no message')
  })

  it('uslessMethodJustForTesting with "Hello There"', () => {
    const message = 'Hello There'
    const wrapper = shallow(
      <Main
        addCount={ jest.fn() }
        count={ 0 }
        resetCount={ jest.fn() }
      />
    )
    const instance = wrapper.instance().uslessMethodJustForTesting(message)
    expect(instance).toEqual(message)
  })
})
