import { cleanup, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from "vitest";
import Search from "./Search";

describe('The Search component', () => {
  afterEach(() => cleanup())

  it('should render', () => {
    render(<Search />)
  })

  it('should render a input textbox', () => {
    render(<Search />)

    screen.getByRole('searchbox')
  })

  it('should allow user to write on the searchbox', async () => {
    const user = userEvent.setup()
    render(<Search />)
    const searchBar = screen.getByRole('searchbox')

    await user.type(searchBar, 'Pickachu')

    expect(searchBar).toHaveValue('Pickachu')
    

  })
})
