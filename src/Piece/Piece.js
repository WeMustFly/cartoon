import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Piece.css'

class Piece extends Component {
  constructor (props) {
    super(props)

    this.originWidth = props.width
    this.zoom = props.zoom
    this.originLeft = props.left
    this.originTop = props.top
    this.img = props.img
  }

  render () {
    const width = this.originWidth * this.zoom
    const left = this.originLeft * this.zoom
    const top = this.originTop * this.zoom

    let style = { width, left, top }

    return (
      <img className='Piece' src={this.img} alt='Piece' style={style} />
    )
  }
}

Piece.propTypes = {
  width: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
  zoom: PropTypes.number,
  img: PropTypes.string
}

export default Piece
