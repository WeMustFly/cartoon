/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'
import Cartoon from './Cartoon'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cartoon />, div)
  ReactDOM.unmountComponentAtNode(div)
})
