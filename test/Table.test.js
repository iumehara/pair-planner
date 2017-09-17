import { shallow, mount } from 'enzyme'
import React from 'react'
import Table from '../src/js/Table'
import * as dataManipulators from '../src/js/dataManipulators'

describe('Table', () => {
  let setParentStateSpy, table
  beforeEach(() => {
    setParentStateSpy = jest.fn()
    table = mount(
      <Table
        rows={{left: ['aa', 'bb', 'cc'], right: ['xx', 'yy', 'zz']}}
        setParentState={setParentStateSpy}
      />
    )
  })

  describe('rotateLeft', () => {
    it('calls setParentState with value from rotateLeft function', () => {
      const rotateLeftSpy = jest.spyOn(dataManipulators, 'rotateLeft')
      rotateLeftSpy.mockReturnValue(['cc', 'aa', 'bb'])

      table.find('.left button.rotate').simulate('click')

      expect(rotateLeftSpy).toHaveBeenCalled()
      expect(rotateLeftSpy.mock.calls[0][0]).toEqual(['aa', 'bb', 'cc'])
      expect(setParentStateSpy).toHaveBeenCalled()
      expect(setParentStateSpy.mock.calls[0][0]).toEqual({left: ['cc', 'aa', 'bb']})
    })
  })

  describe('rotateRight', () => {
    it('calls setParentState with value from rotateRight function', () => {
      const rotateRightSpy = jest.spyOn(dataManipulators, 'rotateRight')
      rotateRightSpy.mockReturnValue(['yy', 'zz', 'xx'])

      table.find('.right button.rotate').simulate('click')

      expect(rotateRightSpy).toHaveBeenCalled()
      expect(rotateRightSpy.mock.calls[0][0]).toEqual(['xx', 'yy', 'zz'])
      expect(setParentStateSpy).toHaveBeenCalled()
      expect(setParentStateSpy.mock.calls[0][0]).toEqual({right: ['yy', 'zz', 'xx']})
    })
  })

  describe('shufflePair', () => {
    describe('track 1', () => {
      it('calls setParentState with value from shufflePair', () => {
        const shufflePairSpy = jest.spyOn(dataManipulators, 'shufflePair')
        shufflePairSpy.mockReturnValue({left: ['xx', 'bb', 'cc'], right: ['aa', 'yy', 'zz']})
        table.find('.track-1 button.shuffle').simulate('click')

        expect(shufflePairSpy).toHaveBeenCalled()
        expect(shufflePairSpy.mock.calls[0][0]).toEqual(0)
        expect(shufflePairSpy.mock.calls[0][1]).toEqual({left: ['aa', 'bb', 'cc'], right: ['xx', 'yy', 'zz']})
        expect(setParentStateSpy).toHaveBeenCalled()
        expect(setParentStateSpy.mock.calls[0][0]).toEqual({left: ['xx', 'bb', 'cc'], right: ['aa', 'yy', 'zz']})
      })
    })
    describe('track 2', () => {
      it('calls setParentState with value from shufflePair', () => {
        const shufflePairSpy = jest.spyOn(dataManipulators, 'shufflePair')
        shufflePairSpy.mockReturnValue({left: ['aa', 'yy', 'cc'], right: ['xx', 'bb', 'zz']})
        table.find('.track-2 button.shuffle').simulate('click')

        expect(shufflePairSpy).toHaveBeenCalled()
        expect(shufflePairSpy.mock.calls[0][0]).toEqual(0)
        expect(shufflePairSpy.mock.calls[0][1]).toEqual({left: ['aa', 'bb', 'cc'], right: ['xx', 'yy', 'zz']})
        expect(setParentStateSpy).toHaveBeenCalled()
        expect(setParentStateSpy.mock.calls[0][0]).toEqual({left: ['aa', 'yy', 'cc'], right: ['xx', 'bb', 'zz']})
      })
    })
    describe('track 3', () => {
      it('calls setParentState with value from shufflePair', () => {
        const shufflePairSpy = jest.spyOn(dataManipulators, 'shufflePair')
        shufflePairSpy.mockReturnValue({left: ['aa', 'bb', 'zz'], right: ['xx', 'yy', 'cc']})
        table.find('.track-3 button.shuffle').simulate('click')

        expect(shufflePairSpy).toHaveBeenCalled()
        expect(shufflePairSpy.mock.calls[0][0]).toEqual(0)
        expect(shufflePairSpy.mock.calls[0][1]).toEqual({left: ['aa', 'bb', 'cc'], right: ['xx', 'yy', 'zz']})
        expect(setParentStateSpy).toHaveBeenCalled()
        expect(setParentStateSpy.mock.calls[0][0]).toEqual({left: ['aa', 'bb', 'zz'], right: ['xx', 'yy', 'cc']})
      })
    })
  })
})
