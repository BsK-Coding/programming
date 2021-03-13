/*
Même exercice que précédemment mais ajouter deux boucles do-while et while pour effectuer le traitement.
*/

const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

let n = 0

/* Boucle do-while & while */

console.log('boucle do-while & while')
console.log('')


do {
  while (n < tab.length)
    console.log(`${tab[n]}`)
  console.log(`length: ${n.length}`)
  ++n
} while (n === tab.length + 1)