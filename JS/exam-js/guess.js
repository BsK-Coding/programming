/*
Ecrire une fonction guess qui prend 2 nombres en paramètres userGuess et secret.
Si userGuess est inférieur à secret la fonction devra afficher: Too small!
Si userGuess est supérieur à secret la fonction devra afficher: Too big!
Si userGuess est égal à secret la fonction devra afficher: You win
*/

const guess = (userGuess, secret) => {
  if (userGuess < secret) {
    return console.log('too small!')
  }
  else if (userGuess > secret) {
    return console.log('too big!')
  }
  else if (userGuess == secret) {
    return console.log('You win')
  }
}

console.log(guess(4, 4))