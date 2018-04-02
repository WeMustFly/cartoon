import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Paws1 from './Paws1.png'
import Paws2 from './Paws2.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    this.pieces.push({
      img: Paws1,
      width: 805,
      left: 219,
      top: -31,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1
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
          opacity: phase === 0 || phase > 2 ? 0 : 1
        }
      }
    })
  }
}

export default Scene
