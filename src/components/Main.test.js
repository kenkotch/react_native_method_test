import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Main from './Main'

configure({ adapter: new Adapter() })

describe('Main Tests', () => {
  it('Main renders the same way every time', () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('incrementCounter should add 1 to counter', () => {
    const wrapper = shallow(<Main />)
    const instance = wrapper.instance()
    expect(wrapper.state('counter')).toBe(0)
    instance.incrementCounter(1)
    expect(wrapper.state('counter')).toBe(1)
  })

  it('incrementCounterByFour should add 4 to counter', () => {
    const wrapper = shallow(<Main />)
    const instance = wrapper.instance()
    expect(wrapper.state('counter')).toBe(0)
    instance.incrementCounter(4)
    expect(wrapper.state('counter')).toBe(4)
  })

  it('resetCounter', () => {
    const wrapper = shallow(<Main />)
    const instance = wrapper.instance()
    instance.incrementCounter(8)
    expect(wrapper.state('counter')).toBe(8)
    instance.resetCounter()
    expect(wrapper.state('counter')).toBe(0)
  })

  it('onPress incrementCounter(1)', () => {
    const wrapper = shallow(<Main />)
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'incrementCounter')

    wrapper.find('TouchableOpacity').first().props().onPress()
    expect(wrapper.state('counter')).toBe(1)
  })

  it('onPress incrementCounter(4)', () => {
    const wrapper = shallow(<Main />)
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'incrementCounter')

    wrapper.find('TouchableOpacity').at(1).props().onPress()
    expect(wrapper.state('counter')).toBe(4)
  })

  it('uslessMethodJustForTesting', () => {
    const wrapper = shallow(<Main />)
    const instance = wrapper.instance().uslessMethodJustForTesting()
    expect(instance).toEqual('There was no message')
  })

  it('uslessMethodJustForTesting with "Hello There"', () => {
    const message = 'Hello There'
    const wrapper = shallow(<Main />)
    const instance = wrapper.instance().uslessMethodJustForTesting(message)
    expect(instance).toEqual(message)
  })
})
