import React from 'react'
import { render, screen } from '@testing-library/react'
import Album from './Album'

test('renders video album', () => {
  render(<Album />)
  const linkElement = screen.getAllByText(/Heading/i)
  expect(linkElement[0]).toBeInTheDocument()
  expect(linkElement.length).toBe(9)
})
