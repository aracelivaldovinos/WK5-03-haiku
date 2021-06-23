import Haiku from './../src/haiku';

describe('Haiku', () => {
  test("should recognize first string", () => {
    const haiku = new Haiku("hello","good","bye")
    expect(haiku.firstString).toEqual("hello")
  })
  test("should recognize second string", () => {
    const haiku = new Haiku("hello","good","bye")
    expect(haiku.secondString).toEqual("good")
  })
  test("should recognize second string", () => {
    const haiku = new Haiku("hello","good","bye")
    expect(haiku.thirdString).toEqual("bye")
  })
})