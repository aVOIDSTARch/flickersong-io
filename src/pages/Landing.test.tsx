import { render, screen } from '@testing-library/preact'
import { describe, it, expect } from 'vitest'
import { Landing } from './Landing'

describe('Landing', () => {
  it('renders hero heading and tagline', () => {
    render(<Landing />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Flickersong')
    expect(screen.getByText(/Craft and clarity in software/)).toBeInTheDocument()
  })

  it('renders a link to the projects page', () => {
    render(<Landing />)
    const link = screen.getByRole('link', { name: /View projects/i })
    expect(link).toHaveAttribute('href', '/projects')
  })
})
