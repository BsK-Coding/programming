// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '1a2b!123456789'

const crackme6 = (password) => {
  if (password[0] === '1') {
    if (password[1] === 'a') {
      if (password[2] === '2') {
        if (password[3] === 'b') {
          if (password[4] === '!' && password.length > 13) {    // => les conditions IF nous donnes les 5 premiers caractères
            // il ne manque plus qu'à rajouter des caractères jusqu'à dépasser 13 caractères (password.length > 13)
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

crackme6(password)