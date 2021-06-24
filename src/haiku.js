export default function Body (line) {
  this.line = line;
}

Body.prototype.checkSyllable = function () {
  let words = this.line.split(" ")
  return words
  }

