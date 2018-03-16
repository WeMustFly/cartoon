import React, { Component } from 'react'
import PropTypes from 'prop-types'
import img from './Fire.png'
import './Fire.css'

class Fire extends Component {
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
      <img className='Fire' src={img} alt='Fire' style={style} />
    )
  }
}

Fire.propTypes = {
  expanded: PropTypes.bool,
  zoom: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number
}

export default Fire
