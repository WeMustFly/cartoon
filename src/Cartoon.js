import React, { Component } from 'react'
import { VelocityComponent } from 'velocity-react'
import preloader from 'preloader'
import background from './Cartoon.png'
import Spark from './Spark/Spark'
import Scenes from './Scenes'
import Sound from 'react-sound'
import './Cartoon.css'

import Scene1Image from './Scene1/Scene.png'
import Scene2Image from './Scene2/Scene.png'
import Scene3Image from './Scene3/Scene.png'
import Scene4Image from './Scene4/Scene.png'
import Scene5Image from './Scene5/Scene.png'
import Scene6Image from './Scene6/Scene.png'
import Scene7Image from './Scene7/Scene.png'

const DEBUG_SCENE = 0

class Cartoon extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ready: false,
      playing: false,
      onPlay: false
    }

    this.zoom = 0.223
    this.width = 5365 * this.zoom
    this.height = 2690 * this.zoom

    const loader = preloader({
      xhrImages: false
    })
    loader.on('progress', progress => console.log(progress))
    loader.on('complete', () => this.setState({ ready: true }))
    loader.add(Scene1Image)
    loader.add(Scene2Image)
    loader.add(Scene3Image)
    loader.add(Scene4Image)
    loader.add(Scene5Image)
    loader.add(Scene6Image)
    loader.add(Scene7Image)
    loader.load()

    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  play (e) {
    e.stopPropagation()
    this.setState({
      playing: true
    })
  }

  stop () {
    this.setState({
      playing: false
    })
  }

  onMouseEnter () {
    this.setState({
      onPlay: true
    })
  }

  onMouseLeave () {
    this.setState({
      onPlay: false
    })
  }

  render () {
    const sceneDuration = 13000

    const style = {
      width: this.width,
      height: this.height,
      marginLeft: -1 * this.width / 2,
      marginTop: -1 * this.height / 2
    }

    const styleBackground = {
      backgroundImage: `url(${background})`
    }

    const sparkAnimation = {
      opacity: this.state.onPlay ? 1 : 0
    }

    return (
      <div className='Cartoon' style={style}>
        {!this.state.playing && !DEBUG_SCENE ? (
          <div className='CartoonBackground' style={styleBackground}>
            <div className='StartButton'>
              {this.state.ready ? (
                <h2 className={this.state.onPlay ? 'OnPlay' : ''} onClick={this.play}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  PLAY
                </h2>
              ) : (
                <h2>On loading...</h2>
              )}
            </div>
            <VelocityComponent animation={sparkAnimation} duration={1000}>
              <Spark zoom={this.zoom} left={3900} top={676} />
            </VelocityComponent>
          </div>
        ) : (
          <Scenes scene={DEBUG_SCENE} zoom={this.zoom} width={this.width} height={this.height} sceneDuration={sceneDuration} />
        )}
        <Sound
          url='Cartoon.mp3'
          playStatus={this.state.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={0}
          onFinishedPlaying={this.stop}
        />
      </div>
    )
  }
}

export default Cartoon
