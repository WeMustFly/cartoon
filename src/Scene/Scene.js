import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VelocityComponent } from 'velocity-react'
import Piece from '../Piece/Piece'
import background from './Scene.png'
import './Scene.css'

const NUMBER_OF_PHASES = 4

class Scene extends Component {
  constructor (props) {
    super(props)

    this.state = {
      phase: 0
    }

    this.originWidth = 5365
    this.originHeight = 2690

    this.zoom = props.width / this.originWidth
    this.width = props.width
    this.height = this.originHeight * this.zoom

    this.background = background

    const duration = parseInt(props.duration / NUMBER_OF_PHASES, 10)
    this.duration = [
      parseInt(duration / 2, 10),
      duration,
      duration * 2,
      parseInt(duration / 2, 10)
    ]

    this.pieces = []

    this.nextPhase = this.nextPhase.bind(this)
  }

  nextPhase () {
    this.setState({
      phase: this.state.phase + 1
    })
  }

  render () {
    const width = this.props.width
    const height = this.originHeight * this.zoom

    const phase = this.state.phase
    const phaseDuration = this.duration[phase]

    const style = { width, height }

    const styleBackground = {
      backgroundImage: `url(${this.background})`
    }

    const backgroundAnimation = {
      opacity: phase === 0 || phase > 2 ? 0 : 1
    }

    if (phase <= NUMBER_OF_PHASES) {
      setTimeout(() => this.nextPhase(), phaseDuration)
    }

    return (
      <div className='Scene' style={style}>
        <VelocityComponent
          animation={backgroundAnimation}
          duration={phaseDuration}
        >
          <div className='SceneBackground' style={styleBackground} />
        </VelocityComponent>
        {this.pieces.map((piece, key) =>
          <VelocityComponent key={key} animation={piece.animation(this.state.phase)} duration={phaseDuration}>
            <Piece img={piece.img} width={piece.width} zoom={this.zoom} left={piece.left} top={piece.top} />
          </VelocityComponent>
        )}
      </div>
    )
  }
}

Scene.propTypes = {
  width: PropTypes.number,
  duration: PropTypes.number
}

export default Scene
