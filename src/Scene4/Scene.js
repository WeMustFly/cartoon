import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Cats from './Cats.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    const zoom = this.zoom
    const catsWidth = 1454
    const catsDelta = 150
    this.pieces.push({
      img: Cats,
      width: catsWidth,
      left: 645,
      top: 565,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          width: (catsWidth - (phase < 2 ? catsDelta : 0)) * zoom,
          rotateZ: phase > 1 ? 20 : 0
        }
      }
    })
  }
}

export default Scene
