import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Intro from './Intro'

test('renders upload area', () => {
  render(<Router><Intro /></Router>)
  const linkElement = screen.getByText(/Upload Video/i)
  expect(linkElement).toBeInTheDocument()
})
