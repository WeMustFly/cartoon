import React, { Component } from 'react'
import background from './pictures/background.png'
import original from './pictures/original.png'
import princess from './pictures/princess.png'
import head from './pictures/head.png'
import './Cartoon.css'

class Cartoon extends Component {
  render () {
    const zoom = 0.223
    const originCartoonWidth = 5365
    const originCartoonHeigth = 2690
    const originPrincessWidth = 737
    const originPrincessLeft = 304
    const originPrincessTop = 85
    const originHeadWidth = 260
    const originHeadLeft = 1970
    const originHeadTop = 1336

    const cartoonWidth = originCartoonWidth * zoom
    const cartoonHeight = originCartoonHeigth * zoom
    const princessWidth = originPrincessWidth * zoom
    const princessLeft = originPrincessLeft * zoom
    const princessTop = originPrincessTop * zoom
    const headWidth = originHeadWidth * zoom
    const headLeft = originHeadLeft * zoom
    const headTop = originHeadTop * zoom

    let cartoonStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width: cartoonWidth,
      height: cartoonHeight,
      marginLeft: -1 * cartoonWidth / 2,
      marginTop: -1 * cartoonHeight / 2
    }
    // cartoonStyle.backgroundImage = `url(${original})`

    let princessStyle = {
      width: princessWidth,
      left: princessLeft,
      top: princessTop
    }

    let headStyle = {
      width: headWidth,
      left: headLeft,
      top: headTop
    }

    return (
      <div className='Cartoon' style={cartoonStyle}>
        <img
          className='Princess'
          src={princess}
          alt='Princess'
          style={princessStyle}
        />
        <img className='Head' src={head} alt='Head' style={headStyle} />
      </div>
    )
  }
}

export default Cartoon
