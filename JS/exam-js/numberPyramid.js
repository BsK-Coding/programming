const numberPyramid = (base) => {

}

numberPyramid(8)

let str = ''
if (!reverse) {
  for (let i = 1; i <= nbBase; ++i) {
    str += char.repeat(i)
    if (i !== nbBase) {
      str += '\n'
    }
  }
} else {
  for (let i = nbBase; i >= 1; --i) {
    str += char.repeat(i)
    if (i !== 1) {
      str += '\n'
    }
  }
}
return str
}

const nbBase = 15

let str2 = showStars(nbBase, true, 'o')     // On aurait pu mettre la variable char à la place de 'o', 
console.log(str2)