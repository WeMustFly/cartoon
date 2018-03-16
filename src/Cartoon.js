import React, { Component } from 'react'
import { VelocityComponent } from 'velocity-react'
import background from './Cartoon.png'
import Spark from './Spark/Spark'
import Scene1 from './Scene1/Scene'
import Scene2 from './Scene2/Scene'
import Scene3 from './Scene3/Scene'
import Scene4 from './Scene4/Scene'
import Scene5 from './Scene5/Scene'
import Scene6 from './Scene6/Scene'
import Scene7 from './Scene7/Scene'
import Sound from 'react-sound'
import './Cartoon.css'

class Cartoon extends Component {
  constructor (props) {
    super(props)

    this.state = {
      scene: 0,
      playing: false,
      onPlay: false
    }

    this.zoom = 0.223
    this.width = 5365 * this.zoom
    this.height = 2690 * this.zoom

    this.play = this.play.bind(this)
    this.stop = this.stop.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.nextScene = this.nextScene.bind(this)
  }

  play (e) {
    e.stopPropagation()
    this.setState({
      playing: true,
      scene: 1
    })
  }

  stop () {
    this.setState({
      playing: false,
      scene: 0
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

  nextScene () {
    if (this.state.scene < 4) {
      this.setState({
        scene: this.state.scene + 1
      })
    }
  }

  render () {
    const sceneDuration = 20000

    const style = {
      width: this.width,
      height: this.height,
      marginLeft: -1 * this.width / 2,
      marginTop: -1 * this.height / 2
    }

    const scenesStyle = {
      width: this.width,
      height: this.height
    }

    const styleBackground = {
      backgroundImage: `url(${background})`
    }

    const sparkAnimation = {
      opacity: this.state.onPlay ? 1 : 0
    }

    if (this.state.playing) {
      setTimeout(() => this.nextScene(), sceneDuration)
    }

    return (
      <div className='Cartoon' style={style}>
        {!this.state.playing ? (
          <div className='CartoonBackground' style={styleBackground}>
            <div className='StartButton'>
              <h2 className={this.state.onPlay ? 'OnPlay' : ''} onClick={this.play}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              >
                PLAY
              </h2>
            </div>
            <VelocityComponent animation={sparkAnimation} duration={1000}>
              <Spark zoom={this.zoom} left={3900} top={676} />
            </VelocityComponent>
          </div>
        ) : (
          <div className='Scenes' style={scenesStyle}>
            {{
              1: (
                <Scene1 width={this.width} duration={sceneDuration} />
              ),
              2: (
                <Scene2 width={this.width} duration={sceneDuration} />
              ),
              3: (
                <Scene3 width={this.width} duration={sceneDuration} />
              ),
              4: (
                <Scene4 width={this.width} duration={sceneDuration} />
              ),
              5: (
                <Scene5 width={this.width} duration={sceneDuration} />
              ),
              6: (
                <Scene6 width={this.width} duration={sceneDuration} />
              ),
              7: (
                <Scene7 width={this.width} duration={sceneDuration} />
              )
            }[this.state.scene]}
          </div>
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
