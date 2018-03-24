import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VelocityComponent } from 'velocity-react'
import Piece from '../Piece/Piece'
import background from './Scene.png'
import './Scene.css'

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

    this.duration = parseInt(props.duration / 4, 10)

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

    const style = { width, height }

    const styleBackground = {
      backgroundImage: `url(${this.background})`
    }

    const backgroundAnimation = {
      opacity: phase === 0 || phase > 2 ? 0 : 1
    }

    setTimeout(() => this.nextPhase(), this.duration)

    return (
      <div className='Scene' style={style}>
        <VelocityComponent
          animation={backgroundAnimation}
          duration={this.duration}
        >
          <div className='SceneBackground' style={styleBackground} />
        </VelocityComponent>
        {this.pieces.map((piece, key) =>
          <VelocityComponent key={key} animation={piece.animation(this.state.phase)} duration={this.duration}>
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
