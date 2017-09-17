import React from 'react'
import { get, set } from './localStorageRepo'
import Table from './Table'
import Form from './Form'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      left: ['', '', ''],
      right: ['', '', ''],
      isEditMode: false
    }

    this.toggleEditMode = this.toggleEditMode.bind(this)
    this.setStateFromChild = this.setStateFromChild.bind(this)
    this.handleUpdateClick = this.handleUpdateClick.bind(this)
  }

  componentWillMount() {
    get()
      .then(data => this.setState({left: data.left, right: data.right}))
  }

  toggleEditMode() {
    this.setState({isEditMode: !this.state.isEditMode})
  }

  setStateFromChild(updatedState) {
    this.setState(updatedState)
  }

  handleUpdateClick() {
    set({left: this.state.left, right: this.state.right})
      .then(data => this.setState({ isEditMode: false }))
  }

  renderTable() {
    const rows = {left: this.state.left, right: this.state.right}
    if (this.state.isEditMode) {
      return <Form rows={rows} setParentState={this.setStateFromChild}/>
    } else {
      return <Table rows={rows} setParentState={this.setStateFromChild}/>
    }
  }

  buttonValue() {
    return this.state.isEditMode ? 'cancel' :'edit'
  }

  render() {
    return (
      <div>
        <h1>Pair Planner</h1>
        <button className={this.buttonValue()} onClick={this.toggleEditMode}>
          {this.buttonValue()}
        </button>
        {this.renderTable()}
        <button className='update' onClick={this.handleUpdateClick}>update</button>
      </div>)
  }
}
