const data = require('./data')

let loopRuns = 0

let blackListNames = [
  "Margery", "Brittni",
  "Crin", "Theodora",
  "Channa", "Maxine",
  "Boigie", "Vivianna",
  "Britney", "Shara",
  "Ludwig", "Verene",
  "Burlie", "Sallee",
  "Rubina", "Gregg",
  "Donelle", "Danyette",
  "Marigold", "Ruby",
  "Stuart", "Broderic",
  "Lowrance", "Aksel",
  "Constantine", "Gib",
  "Diahann", "Clarissa",
  "Buffy", "Thedrick",
  "Allene", "Claudelle",
  "Emelen", "Corri",
  "Winona", "Ardith",
  "Joanna", "Ellerey",
  "Nicolle", "Marje",
  "Tandy", "Sutherlan",
  "Albert",
]

function isNameOnBlacklist(name) {
  // !Do not use the `indexOf`
  for(blackName of blackListNames) {
    loopRuns++
    if(name == blackName) {
      return true
    }
  }
  return false
}

function main() {
  let numNamesOnBlacklist = 0;
  for(let i=0; i < data.getCorpus().length; i++) {
    if(isNameOnBlacklist(data.getCorpus()[i].first_name)){
      numNamesOnBlacklist += 1;
    }
  }
  console.log(`Found ${numNamesOnBlacklist} names on the black list.`)
  console.log(`We ran the loop ${loopRuns} times.`);
}

if (typeof module != 'undefined' && !module.parent) {
  main()
}