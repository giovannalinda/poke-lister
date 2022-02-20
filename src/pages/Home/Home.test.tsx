import { render, screen } from 'src/../__helpers__/app-tests'
import { Home } from '.'

describe('Home page', () => {
  it('Checks if the page header loads correctly', () => {
    render(<Home />)

    expect(
      screen.getByText(
        /The perfect guide for you to find your favorite Pokémon/,
      ),
    ).toBeInTheDocument()
  })
})
