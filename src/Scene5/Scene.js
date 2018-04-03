import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Paws1 from './Paws1.png'
import Paws2 from './Paws2.png'
import Eyes from './Eyes.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    const pawsDelta = 50 * this.zoom
    const eyesDelta = 20 * this.zoom

    this.pieces.push({
      img: Paws1,
      width: 805,
      left: 219,
      top: -31,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          translateX: (phase < 2 ? '-' + pawsDelta : 0)
        }
      }
    })

    this.pieces.push({
      img: Paws2,
      width: 849,
      left: 85,
      top: 0,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          translateX: (phase < 1 ? '-' + pawsDelta : 0)
        }
      }
    })

    this.pieces.push({
      img: Eyes,
      width: 447,
      left: 2195,
      top: 2090,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          translateX: (phase % 2 === 1 ? '+=' : '-=') + eyesDelta,
          translateY: (phase % 2 === 1 ? '-=' : '+=') + eyesDelta
        }
      }
    })
  }
}

export default Scene
