import Haiku from './../src/haiku';

describe('Haiku', () => {
  test("should recognize first sentence", () => {
    const haiku = new Haiku("hello","good","bye")
    expect(haiku.firstString).toEqual("hello")
  })
  
})