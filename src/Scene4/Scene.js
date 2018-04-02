import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Cats from './Cats.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    this.pieces.push({
      img: Cats,
      width: 1454,
      left: 645,
      top: 565,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1
        }
      }
    })
  }
}

export default Scene
