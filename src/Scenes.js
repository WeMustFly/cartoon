import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Scene1 from './Scene1/Scene'
import Scene2 from './Scene2/Scene'
import Scene3 from './Scene3/Scene'
import Scene4 from './Scene4/Scene'
import Scene5 from './Scene5/Scene'
import Scene6 from './Scene6/Scene'
import Scene7 from './Scene7/Scene'
import './Scenes.css'

class Scenes extends Component {
  constructor (props) {
    super(props)

    this.state = {
      scene: props.scene || 1
    }

    this.scene = props.scene
    this.zoom = props.zoom
    this.width = props.width
    this.height = props.height
    this.sceneDuration = props.sceneDuration
    this.delay = 200

    this.scenes = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7]

    this.nextScene = this.nextScene.bind(this)
  }

  nextScene () {
    if (this.state.scene < this.scenes.length) {
      this.setState({
        scene: this.state.scene + 1
      })
    }
  }

  render () {
    const style = {
      width: this.width,
      height: this.height
    }

    console.log('Scenes scene' + this.scene)
    if (!this.scene) {
      setTimeout(() => this.nextScene(), this.sceneDuration + this.delay)
    }

    return (
      <div className='Scenes' style={style}>
        {
          {
            1: <Scene1 width={this.width} duration={this.sceneDuration} />,
            2: <Scene2 width={this.width} duration={this.sceneDuration} />,
            3: <Scene3 width={this.width} duration={this.sceneDuration} />,
            4: <Scene4 width={this.width} duration={this.sceneDuration} />,
            5: <Scene5 width={this.width} duration={this.sceneDuration} />,
            6: <Scene6 width={this.width} duration={this.sceneDuration} />,
            7: <Scene7 width={this.width} duration={this.sceneDuration} />
          }[this.state.scene]
        }
      </div>
    )
  }
}

Scenes.propTypes = {
  scene: PropTypes.number,
  zoom: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  sceneDuration: PropTypes.number
}

export default Scenes
