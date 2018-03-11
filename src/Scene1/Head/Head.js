import React, { Component } from 'react'
import PropTypes from 'prop-types'
import img from './Head.png'
import './Head.css'

class Head extends Component {
  constructor (props) {
    super(props)

    this.expanded = props.expanded
    this.zoom = props.zoom
    this.originLeft = props.left
    this.originTop = props.top

    this.originWidth = 260
  }

  render () {
    const width = this.originWidth * this.zoom
    const left = this.originLeft * this.zoom
    const top = this.originTop * this.zoom

    let style = { width, left, top }

    return (
      <img className='Head' src={img} alt='Head' style={style} />
    )
  }
}

Head.propTypes = {
  expanded: PropTypes.bool,
  zoom: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number
}

export default Head
