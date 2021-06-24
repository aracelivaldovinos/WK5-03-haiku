import Body from './../src/haiku';

describe('Body', () => {
  test("should recognize first string", () => {
    const line = new Body("hello")
    expect(line.line).toEqual("hello")
  })
  })
