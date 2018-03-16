import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VelocityComponent } from 'velocity-react'
import background from './SceneFull.png'
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

    const style = {
      width: width,
      height: height
    }

    const styleBackground = {
      backgroundImage: `url(${background})`
    }

    const backgroundAnimation = {
      opacity: phase === 0 ? 0 : 1
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
      </div>
    )
  }
}

Scene.propTypes = {
  width: PropTypes.number
}

export default Scene
