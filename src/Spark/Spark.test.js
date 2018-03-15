/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'
import Head from './Scene'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Head />, div)
  ReactDOM.unmountComponentAtNode(div)
})
