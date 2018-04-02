import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Spark from './Spark.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    const zoom = this.zoom
    this.pieces.push({
      img: Spark,
      width: 467,
      left: 3820,
      top: 170,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          rotateZ: phase > 1 ? 100 : 0,
          translateY: phase > 1 ? 2000 * zoom : 0,
          translateX: phase > 1 ? 1500 * zoom : 0
        }
      }
    })
  }
}

export default Scene
