/*  Algorithme en Expression */
let age = 17
let canVote = age >= 18 ? 'You can vote' : 'You can not vote'
console.log(`${canVote}`)


/*  Algorithme en Statement */
/*
let age = 17
let canVote = false
if (age >= 18) {
  canVote = true
} else {
  canVote = false
}
if (canVote) {
  console.log('You can vote')
} else {
  console.log('You can not vote')
}
*/

/* Correction */
let age = 17
let canVote = age >= 18 ? true : false
console.log(`${canVote ? 'you can vote' : 'you can not vote'}`)