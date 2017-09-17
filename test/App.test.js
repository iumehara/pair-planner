import { shallow } from 'enzyme'
import React from 'react'
import App from '../src/js/App'
import * as localStorageRepo from '../src/js/localStorageRepo'

describe('App', () => {
  describe('Rendered Components', () => {
    let app
    beforeEach(() => {
      const getSpy = jest.spyOn(localStorageRepo, 'get')
      getSpy.mockReturnValue({then: callback => callback({left: ['aa'], right: ['bb']})})
      app = shallow(<App/>)
    })
    it('renders Table with props', () => {
      const table = app.find('Table')
      expect(table.length).toBe(1)
      expect(table.props().rows).toEqual({left: ['aa'], right: ['bb']})
      expect(table.props().setParentState).toEqual(app.instance().setStateFromChild)
    })

    it('renders Form with props', () => {
      app.setState({isEditMode: true})
      const form = app.find('Form')
      expect(form.length).toBe(1)
      expect(form.props().rows).toEqual({left: ['aa'], right: ['bb']})
      expect(form.props().setParentState).toEqual(app.instance().setStateFromChild)
    })
  })

  describe('Edit Mode', () => {
    let app
    beforeEach(() => {
      jest.spyOn(App.prototype, 'componentWillMount')
      app = shallow(<App/>)
    })
    it('is view mode by default', () => {
      expect(app.find('Table').length).toBe(1)
      expect(app.find('button.edit').length).toBe(1)
      expect(app.find('Form').length).toBe(0)
      expect(app.find('button.cancel').length).toBe(0)
    })
    it('toggles to edit mode', () => {
      app.find('button.edit').simulate('click')

      expect(app.find('Form').length).toBe(1)
      expect(app.find('Table').length).toBe(0)
    })
    it('toggles back to view mode', () => {
      app.find('button.edit').simulate('click')
      app.find('button.cancel').simulate('click')

      expect(app.find('Form').length).toBe(0)
      expect(app.find('Table').length).toBe(1)
    })
  })

  describe('handleUpdateClick', () => {
    it('calls set function', () => {
      jest.spyOn(App.prototype, 'componentWillMount')
      const setSpy = jest.spyOn(localStorageRepo, 'set')
      setSpy.mockReturnValue({then: callback => callback({})})
      const app = shallow(<App/>)
      app.setState({left: ['aa'], right: ['zz']})

      app.find('button.update').simulate('click')

      expect(setSpy).toHaveBeenCalled()
      expect(setSpy.mock.calls.length).toBe(1)
      expect(setSpy.mock.calls[0][0]).toEqual({left: ['aa'], right: ['zz']})
    })
  })
})
