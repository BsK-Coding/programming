/* Méthode 1 - Algorithme uniquement avec un seul IF */

let password = '1a2b!AZEAZEAAA'
if (password[0] === '1') + (password[1] === 'a') + (password[2] === '2') + (password[3] === 'b') + (password[4] === '!') && (password.length > 13) ? console.log('OK') : console.log('BAD')



/* Méthode 2 */
let password = '1a2b!AZEAZEAz'
const crackme6 = (password) => {

  if (password[0] === '1' && password[1] === 'a' && password[2] === '2' && password[3] === 'b' && password[4] === '!' && password.length > 13) {
    console.log('OK')
  }
  else {
    console.log('BAD')
  }
}
crackme6(password)

/* Méthode 3 */
// On pouvait utiliser l'élément "password.startsWith('1a2b!')" pour optimiser le code

/* Algorithme a simplifier unqiuement avec des IF */
/*let password = '1a2b!AZEAZEAZEAZEAZEAZEAZ'
const crackme6 = (password) => {
  if (password[0] === '1') {
    if (password[1] === 'a') {
      if (password[2] === '2') {
        if (password[3] === 'b') {
          if (password[4] === '!' && password.length > 13) {
            console.log('OK')
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}

crackme6(password)*/