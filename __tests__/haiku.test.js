import Body from './../src/haiku';

describe('Body', () => {
  test("should recognize first string", () => {
    const line = new Body("hello")
    expect(line.line).toEqual("hello")
  })
  test('should split string', () => {
    const words = new Body("hello my");
    expect(words.checkSyllable()).toEqual(["hello", "my"]);
  })
  })
