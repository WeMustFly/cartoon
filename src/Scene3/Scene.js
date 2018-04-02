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
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          rotateZ: phase % 2 === 1 ? '+=10' : '-=10'
        }
      }
    })

    const zoom = this.zoom
    const fireWidth = 388
    const fireDelta = 30
    this.pieces.push({
      img: Fire,
      width: fireWidth,
      left: 1237,
      top: 943,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          width: phase % 2 === 1 ? (fireWidth - fireDelta) * zoom : fireWidth * zoom,
          translateY: phase % 2 === 1 ? fireDelta * zoom : 0,
          translateX: phase % 2 === 1 ? fireDelta * zoom : 0
        }
      }
    })

    const snowTop = -1464
    this.pieces.push({
      img: Snow,
      width: 700,
      left: 1995,
      top: snowTop,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          translateY: parseInt(260 * (phase - (phase <= 2 ? 0 : phase - 2)) * zoom, 10)
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
          opacity: phase === 0 || phase === 1 || phase > 2 ? 0 : 1,
          translateY: phase === 1 ? 500 * zoom : 0,
          translateX: phase === 1 ? 500 * zoom : 0,
          rotateZ: phase > 1 ? 50 : 0
        }
      }
    })
  }
}

export default Scene
