let password = ''

const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)                // => Etape 1: le caractère tapé sera convertie en valeur Décimal (charCodeAt) et (tmp1 +=) Additionne à chaque boucle for dans tmp1
  }
  if (tmp1 === 1337) {                            // => Etape 2: Le password entrée devra être égale à 1337, afin de valider la condition
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme4(password)
===========================================

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('')
  // => (slice -3, -1) retire les éléments hormis les caractères -2 et -3 du password de 4 caractères
  // du coup on peut mettre n'importe quelle caractères en position avant et après 42
  // split et join s'annule entre eux lorsqu'on les combines
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)
===========================================
const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) {       // Pour entrer dans la boucle Password doit contenir 'Just' en Début et 'Password' en Fin
    let tmp1 = password.slice(4).slice(0, -8)                               // Password "JustASimplePassword" Pour Lire les commandes à la suite on commence par la fin [slice(0, -8) "Juste#ASimple"] [slice(4) "ASimple"]
    tmp1 = tmp1.split('').reverse().join('')                                // Inversion de la valeur contenu dans "tmp1" = #ASimple
    if (Number.isNaN(Number(tmp1))) {                                       // Cette condition ne permet d'accéder à la condition IF de validation de Password que si "tmp1" est en Ascii
      tmp1 += String.fromCharCode(35)                                       // Cette command permet la conversion des caractères Ascii en Char
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') {                        // tmp1 = elpmiSA#
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
}
crackme9(password)
===========================================
const crackme10 = (password) => {
  if (
    password
      .trim()
      .toLowerCase()                                // Transforme le caractère en Minuscule
      .split('')
      .filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem))
      .map((elem) => elem.charCodeAt())             // aeiouy convertie en décimal (97,101,105,111,117,121) seul l'élément "a" nous intérressera pour la suite du code
      .reduce((a, b) => {                           // Il nous manque l'élément "a" en Décimal pour la function "reduce"
        return a + b
      }, 0) %                                       // => True si le résultat du Modulo différent de 0, donc un chiffre impair
    2 !==
    0
  ) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme10(password)
===========================================
===========================================