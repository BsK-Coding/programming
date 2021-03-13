/*
Ecrire dans un même fichier ThreeWayLoop.js, 3 boucles différentes for, for-of, forEach qui effectueront le même traitement.
Ce traitement consistera à afficher tous les éléments d'un tableau de string suivis de leur taille.
*/

const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

/* Boucle For */

console.log('boucle For')
console.log('')
for (let i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}; length: ${tab[i].length}`)
}
console.log('')

/* Boucle For-Of */
console.log('boucle For-Of')
console.log('')
for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}
console.log('')

/* Boucle ForEach */
console.log('boucle ForEach')
console.log('')
tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`)
})
