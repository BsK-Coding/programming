const calcAdd = (nb1, nb2) => {
  return nb1 + nb2
}

const calcSub = (nb1, nb2) => {
  return nb1 - nb2
}

const calcMul = (nb1, nb2) => {
  return nb1 * nb2
}

const calcDiv = (nb1, nb2) => {
  return nb1 / nb2
}

const calculatrice = (operateur, nb1, nb2) => {
  switch (operateur) {
    case '+':
      return nb1 + nb2                                 // Peu aussi s'écrire => console.log(calcAdd(nb1, nb2))
      break
    case '-':
      return nb1 - nb2
      break
    case '*':
      return nb1 * nb2
      break
    case '/':
      return nb1 / nb2
      break
    default:
      console.log(`vous n'avez pas entrer un opérateur valide`)   // Affichage d'un msg, si jamais la valeur de l'opérateur ne fait pas partie des 4 "'+', '-', '*', '/'"
  }
}

const operateur = '+'
console.log(calculatrice(operateur, 3, 2))              // console.log(calculatrice(operateur, nb1, nb2))