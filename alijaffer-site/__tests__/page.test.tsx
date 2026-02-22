import { render, screen } from '@testing-library/react'
import HomePage from '../app/page'

describe('HomePage', () => {
  it('renders welcome heading', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading', { name: /welcome to ali jaffer site/i })).toBeInTheDocument()
  })

  it('renders home page content', () => {
    render(<HomePage />)
    expect(screen.getByText(/this is the home page/i)).toBeInTheDocument()
  })
})
