import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({ adapter: new Adapter() })

describe('App Tests', () => {
  it('App renders the same way every time', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('incrementCounterByOne should add 1 to counter', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    expect(wrapper.state('counter')).toBe(0)
    instance.incrementCounterByOne()
    expect(wrapper.state('counter')).toBe(1)
  })

  it('incrementCounterByFour should add 4 to counter', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    expect(wrapper.state('counter')).toBe(0)
    instance.incrementCounterByFour()
    expect(wrapper.state('counter')).toBe(4)
  })
})
