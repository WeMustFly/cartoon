import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Cake from './Cake.png'
import Hands from './Hands.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    this.pieces.push({
      img: Cake,
      width: 763,
      left: 1022,
      top: 789,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1
        }
      }
    })

    this.pieces.push({
      img: Hands,
      width: 2056,
      left: 381,
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
