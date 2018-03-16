/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'
import Armchair from './Scene'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Armchair />, div)
  ReactDOM.unmountComponentAtNode(div)
})
