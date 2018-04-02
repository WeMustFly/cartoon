import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Crown from './Crown.png'
import Shoes from './Shoes.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    const zoom = this.zoom
    const crowmDelta = 400
    const crownWidth = 277
    this.pieces.push({
      img: Crown,
      width: crownWidth,
      left: 2098,
      top: 2269,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          translateY: phase < 2 ? crowmDelta * zoom : 0,
          width: (phase < 2 ? (crownWidth + crowmDelta / 5) : crownWidth) * zoom
        }
      }
    })

    const shoesDelta = 600
    const shoesWidth = 469
    this.pieces.push({
      img: Shoes,
      width: shoesWidth,
      left: 161,
      top: 107,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          translateY: phase < 2 ? -1 * shoesDelta * zoom : 0,
          width: (phase < 2 ? (shoesWidth + shoesDelta / 5) : shoesWidth) * zoom
        }
      }
    })
  }
}

export default Scene
