import React, { Component } from 'react'
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

    const startButtonStyle = {
    }

    const scenesStyle = {
      width: this.width,
      height: this.height
    }

    return (
      <div className='Cartoon' style={style}>
        {!this.state.playing ? (
          <div className='StartButton' style={startButtonStyle}>
            <h2 className={this.state.onPlay ? 'OnPlay' : ''} onClick={this.play}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
            >
              PLAY
            </h2>
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
        />
      </div>
    )
  }
}

export default Cartoon
