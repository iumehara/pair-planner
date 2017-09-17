import React from 'react'
import PropTypes from 'prop-types'
import { shufflePair, rotateLeft, rotateRight } from './dataManipulators'

export default class Table extends React.Component {
  constructor(props) {
    super(props)

    this.rotateLeftWasClicked = this.rotateLeftWasClicked.bind(this)
    this.rotateRightWasClicked = this.rotateRightWasClicked.bind(this)
    this.shufflePairWasClicked = this.shufflePairWasClicked.bind(this)
  }

  rotateLeftWasClicked() {
    const currentLeft = this.props.rows.left.slice()
    this.props.setParentState({left: rotateLeft(currentLeft)})
  }

  rotateRightWasClicked() {
    const currentRight = this.props.rows.right.slice()
    this.props.setParentState({right: rotateRight(currentRight)})
  }

  shufflePairWasClicked(event) {
    const trackIndex = Number(event.target.value) - 1
    const originalRows = {left: this.props.rows.left, right: this.props.rows.right}
    const updatedRows = shufflePair(trackIndex, originalRows)
    this.props.setParentState({
      left: updatedRows.left,
      right: updatedRows.right
    })
  }

  render() {
    const shuffleButton = i => {
      return (
        <td key={i} className={`track-${i+1}`}>
          <button className='shuffle' onClick={this.shufflePairWasClicked} value={i+1}>
            shuffle
          </button>
        </td>
      )
    }

    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
        <tbody>
          <tr className='left'>
            <td><button className='rotate' onClick={this.rotateLeftWasClicked}>left</button></td>
            {this.props.rows.left.map((dev, i) => <td key={i}>{dev}</td>)}
          </tr>
          <tr className='right'>
            <td><button className='rotate' onClick={this.rotateRightWasClicked}>right</button></td>
            {this.props.rows.right.map((dev, i) => <td key={i}>{dev}</td>)}
          </tr>
          <tr>
            <td></td>
            { Array(3).fill().map((_, i) => shuffleButton(i)) }
          </tr>
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  rows: PropTypes.shape({
    left: PropTypes.array.isRequired,
    right: PropTypes.array.isRequired
  }).isRequired,
  setParentState: PropTypes.func.isRequired
}
