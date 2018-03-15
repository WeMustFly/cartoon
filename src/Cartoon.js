import React, { Component } from 'react'
import { VelocityComponent } from 'velocity-react'
import background from './Cartoon.png'
import Spark from './Spark/Spark'
import Scene1 from './Scene1/Scene'
import Sound from 'react-sound'
import './Cartoon.css'

class Cartoon extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      onPlay: false
    }

    this.zoom = 0.223
    this.width = 5365 * this.zoom
    this.height = 2690 * this.zoom
  }

  play = (e) => {
    e.stopPropagation()
    this.setState({
      playing: true
    })
  }

  stop = () => {
    this.setState({
      playing: false
    })
  }

  onMouseEnter = () => {
    this.setState({
      onPlay: true
    })
  }

  onMouseLeave = () => {
    this.setState({
      onPlay: false
    })
  }

  render () {
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
            <Scene1 width={this.width} />
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
