import { render, screen } from '@testing-library/react'
import Contact from '../app/contact/page'

describe('Contact', () => {
  it('renders contact heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /ali@alijaffer.co.uk/i })).toHaveAttribute('href', 'mailto:ali@alijaffer.co.uk')
  })

  it('renders external links with target blank', () => {
    render(<Contact />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin.com\/in\/alijaffer/i })
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })
})
