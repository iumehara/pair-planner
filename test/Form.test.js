import { shallow } from 'enzyme'
import React from 'react'
import Form from '../src/js/Form'

describe('Form', () => {
  describe('handleChange', () => {
    let setParentStateSpy, form
    beforeEach(() => {
      setParentStateSpy = jest.fn()
      form = shallow(
        <Form
          rows={{left: ['aa', 'bb', 'cc'], right: ['xx', 'yy', 'zz']}}
          setParentState={setParentStateSpy}
        />
      )
    })
    it('submits data from left1 input', () => {
      form.find('input.left1').simulate('change', {target: {name: '0', value: 'AA'}})
      expect(setParentStateSpy.mock.calls[0][0]).toEqual({left: ['AA', 'bb', 'cc']})
    })

    it('submits data from left2 input', () => {
      form.find('input.left2').simulate('change', {target: {name: '1', value: 'BB'}})
      expect(setParentStateSpy.mock.calls[0][0]).toEqual({left: ['aa', 'BB', 'cc']})
    })

    it('submits data from left3 input', () => {
      form.find('input.left3').simulate('change', {target: {name: '2', value: 'CC'}})
      expect(setParentStateSpy.mock.calls[0][0]).toEqual({left: ['aa', 'bb', 'CC']})
    })

    it('submits data from right1 input', () => {
      form.find('input.right1').simulate('change', {target: {name: '0', value: 'XX'}})
      expect(setParentStateSpy.mock.calls[0][0]).toEqual({right: ['XX', 'yy', 'zz']})
    })

    it('submits data from right2 input', () => {
      form.find('input.right2').simulate('change', {target: {name: '1', value: 'YY'}})
      expect(setParentStateSpy.mock.calls[0][0]).toEqual({right: ['xx', 'YY', 'zz']})
    })

    it('submits data from right3 input', () => {
      form.find('input.right3').simulate('change', {target: {name: '2', value: 'ZZ'}})
      expect(setParentStateSpy.mock.calls[0][0]).toEqual({right: ['xx', 'yy', 'ZZ']})
    })
  })
})
