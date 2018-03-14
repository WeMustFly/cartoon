import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VelocityComponent } from 'velocity-react'
import background from './Scene.png'
import Head from './Head/Head'
import Princess from './Princess/Princess'
import './Scene.css'

class Scene extends Component {
  constructor (props) {
    super(props)

    this.state = {
      phase: 0
    }

    this.props = props
    this.originWidth = 5365
    this.originHeight = 2690
  }

  nextPhase = () => {
    this.setState({
      phase: this.state.phase + 1
    })
  }

  render () {
    const zoom = this.props.width / this.originWidth
    const duration = 5000
    const delay = 200

    const width = this.props.width
    const height = this.originHeight * zoom

    const phase = this.state.phase
    const expanded = this.state.expanded

    const style = {
      width: width,
      height: height
    }

    const styleBackground = {
      backgroundImage: `url(${background})`
    }

    const backgroundAnimation = {
      opacity: phase === 0 || phase > 2 ? 0 : 1
    }

    const headAnimation = {
      opacity: phase === 0 || phase > 2 ? 0 : 1,
      rotateZ: phase > 1 ? 30 : 0
    }

    const princessAnimation = {
      opacity: phase === 0 || phase > 2 ? 0 : 1,
      translateY: phase < 2 ? -1183 * zoom : 0
    }

    setTimeout(() => this.nextPhase(), duration + delay)

    return (
      <div className='Scene' style={style}>
        <VelocityComponent
          animation={backgroundAnimation}
          duration={duration}
        >
          <div className='SceneBackground' style={styleBackground} />
        </VelocityComponent>
        <VelocityComponent animation={headAnimation} duration={duration}>
          <Head zoom={zoom} expanded={expanded} left={1960} top={1336} />
        </VelocityComponent>
        <VelocityComponent animation={princessAnimation} duration={duration}>
          <Princess zoom={zoom} expanded={this.state.expanded} left={304} top={85} />
        </VelocityComponent>
      </div>
    )
  }
}

Scene.propTypes = {
  width: PropTypes.number
}

export default Scene
