/* eslint-env mocha */

import React from 'react'
import ReactDOM from 'react-dom'
import Spark from './Spark'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Spark />, div)
  ReactDOM.unmountComponentAtNode(div)
})
