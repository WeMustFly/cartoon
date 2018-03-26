import BaseScene from '../Scene/Scene'
import background from './SceneFull.png'
import './Scene.css'

class Scene extends BaseScene {
  constructor (props) {
    super(props)

    this.background = background
  }
}

export default Scene
