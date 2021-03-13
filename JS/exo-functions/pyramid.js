/*
En vous inspirant de la fonction showStars vue en cours, Ecrire une fonction pyramid qui prend 3 paramètres:

le nombre d'éléments qui sera la base de la pyramide => "nbBase"
un boolean pour vérifier si la pyramide sera générée à l'envers ou à l'endroit => "rectoVerso" (Si rectoVerso === true alors afficher la pyramide à l'envers)
une string (un caractère) qui sera le motif à afficher contrairement à l'exemple du cours qui affiche par défaut le caractère *.
*/
/*
const showStars = (nbBase, rectoVerso) => {
  if (rectoVerso) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log('o'.repeat(i))
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log('o'.repeat(i))
    }
  }
}
*/

const showStars = (nbBase, reverse, char) => {
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
console.log(str2)                           // mais dans ce cas il aurait fallu déclarer cette variable avant let char = 'o'



/*
// Appel de la fonction showStars avec l'argument 5 et true
// showStars(5, true)

// Appel de la fonction showStars avec l'argument 10 et false
// showStars(10, false)

const nbBase = 15
// Appel de la fonction showStars avec l'argument nbBase qui est égal a 15 et true
showStars(nbBase, true)

/*
const showStars = (nbBase, reverse) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log('o'.repeat(i))
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log('o'.repeat(i))
    }
  }
}

// Appel de la fonction showStars avec l'argument 5 et true
// showStars(5, true)

// Appel de la fonction showStars avec l'argument 10 et false
// showStars(10, false)

const nbBase = 15
// Appel de la fonction showStars avec l'argument nbBase qui est égal a 15 et true
showStars(nbBase, true)
*/