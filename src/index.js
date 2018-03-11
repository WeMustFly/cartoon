import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Cartoon from './Cartoon'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Cartoon />, document.getElementById('root'))
registerServiceWorker()
