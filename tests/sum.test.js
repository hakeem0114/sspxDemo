//Practice Test

// sum.test.js
// import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

//App.jsx

describe('2nd test',()=>{
  it('sum',()=> {
    expect(sum(1, 2)).toBe(3)
  })
})