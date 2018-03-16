/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'
import Piece from './Piece'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Piece />, div)
  ReactDOM.unmountComponentAtNode(div)
})
