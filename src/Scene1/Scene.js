import React, { Component } from 'react'
import { VelocityComponent } from 'velocity-react'
import background from './Scene.png'
import Head from './Head/Head'
import Princess from './Princess/Princess'
import './Scene.css'

class Scene extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  whenToggleClicked = () => this.setState({
    expanded: !this.state.expanded
  })

  render () {
    const zoom = 0.223
    const duration = 2000
    const delay = 200

    const originWidth = 5365
    const originHeigth = 2690

    const width = originWidth * zoom
    const height = originHeigth * zoom

    const style = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: width,
      height: height,
      marginLeft: -1 * width / 2,
      marginTop: -1 * height / 2
    }

    setTimeout(() => this.whenToggleClicked(), duration + delay)

    return (
      <div className='Scene' style={style}>
        <VelocityComponent animation={{translateY: this.state.expanded ? 0 : -1183 * zoom}} duration={duration}>
          <Princess zoom={zoom} expanded={this.state.expanded} left={304} top={85} />
        </VelocityComponent>
        <VelocityComponent animation={{rotateZ: this.state.expanded ? 30 : 0}} duration={duration}>
          <Head zoom={zoom} expanded={this.state.expanded} left={1960} top={1336} />
        </VelocityComponent>
      </div>
    )
  }
}

export default Scene
