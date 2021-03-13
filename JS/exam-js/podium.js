const sortAscend = (tab) => {
  count = [0]
  for (const elem of tab) {
    count = elem
    tab.sort(function (a, b) { return a - b })
    return
  }
}

const tab = [10, 45, 9, 15, 8, 54]
console.log(`1st: ${count[0]}`)
console.log(`2nd: ${count[0]}`)
console.log(`3rd: ${count[0]}`)