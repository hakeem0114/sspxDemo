//Vitest Imports
import { expect, test } from 'vitest'

//Component Imports
import Nav from './Nav'

test('Nav Test', () => {
  const navComponent = Nav() // Render the Nav component

  // Check if the rendered component contains an <li> element with the text 'Home'
  expect(navComponent).toContainHTML('<li>Home</li>')
})
