import BaseScene from '../Scene/Scene'
import background from './Scene.png'
import Head from './Head.png'
import Princess from './Princess.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background

    this.pieces.push({
      img: Head,
      width: 260,
      left: 1960,
      top: 1336,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          rotateZ: phase > 1 ? 30 : 0
        }
      }
    })

    /** @TODO: ZOOM!1 */
    const zoom = this.zoom
    this.pieces.push({
      img: Princess,
      width: 737,
      left: 304,
      top: 85,
      animation: function (phase) {
        return {
          opacity: phase === 0 || phase > 2 ? 0 : 1,
          translateY: phase < 2 ? -1183 * zoom : 0
        }
      }
    })
  }
}

export default Scene
