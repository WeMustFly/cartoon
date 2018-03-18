/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'
import Scenes from './Scenes'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Scenes />, div)
  ReactDOM.unmountComponentAtNode(div)
})
