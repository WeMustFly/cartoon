import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Crown from './Crown.png'
import Shoes from './Shoes.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    this.pieces.push({
      img: Crown,
      width: 277,
      left: 2098,
      top: 2269,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1
        }
      }
    })

    this.pieces.push({
      img: Shoes,
      width: 469,
      left: 161,
      top: 107,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1
        }
      }
    })
  }
}

export default Scene
