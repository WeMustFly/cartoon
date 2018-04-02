import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Armchair from './Armchair.png'
import Fire from './Fire.png'
import Snow from './Snow.png'
import Spark from './Spark.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    this.pieces.push({
      img: Armchair,
      width: 692,
      left: 1887,
      top: 1345,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1
        }
      }
    })

    this.pieces.push({
      img: Fire,
      width: 388,
      left: 1237,
      top: 941,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1
        }
      }
    })

    this.pieces.push({
      img: Snow,
      width: 700,
      left: 1995,
      top: -1264,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1
        }
      }
    })

    this.pieces.push({
      img: Spark,
      width: 240,
      left: 807,
      top: 524,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1
        }
      }
    })
  }
}

export default Scene
