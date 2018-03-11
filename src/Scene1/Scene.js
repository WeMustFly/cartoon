import React, { Component } from 'react'
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

  render () {
    const zoom = 0.223

    const originWidth = 5365
    const originHeigth = 2690

    const width = originWidth * zoom
    const height = originHeigth * zoom

    let style = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: width,
      height: height,
      marginLeft: -1 * width / 2,
      marginTop: -1 * height / 2
    }

    return (
      <div className='Scene' style={style}>
        <Princess zoom={zoom} expanded={this.state.expanded} left={304} top={85} />
        <Head zoom={zoom} expanded={this.state.expanded} left={1970} top={1336} />
      </div>
    )
  }
}

export default Scene
