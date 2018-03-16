/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'
import Fire from './Scene'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Fire />, div)
  ReactDOM.unmountComponentAtNode(div)
})
