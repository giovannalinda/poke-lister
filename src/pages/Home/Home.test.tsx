import { render, screen } from 'src/../__helpers__/app-tests'
import { Home } from '.'

describe('Home page', () => {
  it('Checks if the page header loads correctly', () => {
    render(<Home />)

    expect(screen.getByText(/Who is that Pokémon?/)).toBeInTheDocument()
  })
})
