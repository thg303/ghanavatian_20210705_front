import React from 'react'
import { render, screen } from '@testing-library/react'
import Upload from './Upload'

test('renders upload area', () => {
  render(<Upload />)
  const linkElement = screen.getByText(/Upload Video/i)
  expect(linkElement).toBeInTheDocument()
})
