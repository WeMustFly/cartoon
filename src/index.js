import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Scene1 from './Scene1/Scene'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Scene1 />, document.getElementById('root'))
registerServiceWorker()
