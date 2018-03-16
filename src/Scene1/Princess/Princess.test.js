/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'
import Princess from './Princess'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Princess />, div)
  ReactDOM.unmountComponentAtNode(div)
})
