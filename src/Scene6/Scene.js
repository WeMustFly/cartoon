import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Cake from './Cake.png'
import Hands from './Hands.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    const zoom = this.zoom
    const cakeDelta = 300
    const handsDelta = 200

    this.pieces.push({
      img: Cake,
      width: 763,
      left: 1022,
      top: 789,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          translateY: phase < 2 ? -1 * (cakeDelta + handsDelta) * zoom : 0,
          rotateZ: phase < 2 ? 70 : 0
        }
      }
    })

    const handsWidth = 2056
    this.pieces.push({
      img: Hands,
      width: 2056,
      left: 381,
      top: 0,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          translateY: phase < 2 ? -1 * handsDelta * zoom : 0,
          handsWidth: (phase < 2 ? handsWidth + handsDelta : handsWidth) * zoom
        }
      }
    })
  }
}

export default Scene
