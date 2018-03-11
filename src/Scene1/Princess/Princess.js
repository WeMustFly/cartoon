import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VelocityComponent } from 'velocity-react'
import img from './Princess.png'
import './Princess.css'

class Princess extends Component {
  constructor (props) {
    super(props)

    this.expanded = props.expanded
    this.zoom = props.zoom
    this.originLeft = props.left
    this.originTop = props.top

    this.originWidth = 737
  }

  render () {
    const width = this.originWidth * this.zoom
    const left = this.originLeft * this.zoom
    const top = this.originTop * this.zoom

    let style = { width, left, top }

    let animationProps = {
      duration: 200,
      animation: {
        rotateX: 160
      }
    }

    return (
      <VelocityComponent {...animationProps}>
        <img className='Princess' src={img} alt='Princess' style={style} />
      </VelocityComponent>
    )
  }
}

Princess.propTypes = {
  expanded: PropTypes.bool,
  zoom: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number
}

export default Princess
