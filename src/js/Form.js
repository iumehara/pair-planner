import React from 'react'
import PropTypes from 'prop-types'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleLeftChange = this.handleLeftChange.bind(this)
    this.handleRightChange = this.handleRightChange.bind(this)
  }

  handleLeftChange(event) {
    const currentLeft = this.props.rows.left.slice()
    currentLeft[event.target.name] = event.target.value

    this.props.setParentState({left: currentLeft})
  }

  handleRightChange(event) {
    const currentRight = this.props.rows.right.slice()
    currentRight[event.target.name] = event.target.value

    this.props.setParentState({right: currentRight})
  }

  render() {
    return (
      <form>
        <table>
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td><input className='left1' name={0} onChange={this.handleLeftChange} defaultValue={this.props.rows.left[0]}/></td>
            <td><input className='left2' name={1} onChange={this.handleLeftChange} defaultValue={this.props.rows.left[1]}/></td>
            <td><input className='left3' name={2} onChange={this.handleLeftChange} defaultValue={this.props.rows.left[2]}/></td>
          </tr>
          <tr>
            <td><input  className='right1' name={0} onChange={this.handleRightChange} defaultValue={this.props.rows.right[0]}/></td>
            <td><input  className='right2' name={1} onChange={this.handleRightChange} defaultValue={this.props.rows.right[1]}/></td>
            <td><input  className='right3' name={2} onChange={this.handleRightChange} defaultValue={this.props.rows.right[2]}/></td>
          </tr>
          </tbody>
        </table>
      </form>
    )
  }
}

Form.propTypes = {
  rows: PropTypes.shape({
    left: PropTypes.array.isRequired,
    right: PropTypes.array.isRequired
  }).isRequired,
  setParentState: PropTypes.func.isRequired
}
