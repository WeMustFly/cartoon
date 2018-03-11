import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

    this.props = props
    this.originWidth = 5365
    this.originHeight = 2690
  }

  whenToggleClicked = () => this.setState({
    expanded: !this.state.expanded
  })

  render () {
    const zoom = this.props.width / this.originWidth
    const duration = 2000
    const delay = 200

    const width = this.props.width
    const height = this.originHeight * zoom

    const style = {
      width: width,
      height: height,
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover'
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

Scene.propTypes = {
  width: PropTypes.number
}

export default Scene
