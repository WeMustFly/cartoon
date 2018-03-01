import React, { Component } from 'react'
// import background from './pictures/background.png'
import background from './pictures/background_full.png'
import princess from './pictures/princess.png'
import head from './pictures/head.png'
import './Cartoon.css'

class Cartoon extends Component {
  render () {
    const zoom = 0.223
    const originCartoonWidth = 5365
    const originCartoonHeigth = 2690
    const originPrincessWidth = 584
    const originHeadWidth = 260
    const cartoonWidth = originCartoonWidth * zoom
    const cartoonHeight = originCartoonHeigth * zoom
    const princessWidth = originPrincessWidth * zoom
    const headWidth = originHeadWidth * zoom

    let cartoonStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: cartoonWidth,
      height: cartoonHeight,
      marginLeft: -1 * cartoonWidth / 2,
      marginTop: -1 * cartoonHeight / 2
    }

    let princessStyle = {
      width: princessWidth
    }

    let headStyle = {
      width: headWidth
    }

    return (
      <div className='Cartoon' style={cartoonStyle}>
        <img
          className='Princess'
          src={princess}
          alt='Princess'
          style={princessStyle}
        />
        <img
          className='Head'
          src={head}
          alt='Head'
          style={headStyle}
        />
      </div>
    )
  }
}

export default Cartoon
