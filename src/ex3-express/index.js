const express = require('express')
const url = require('url')

const app = express()
const port = 8080

function convert(b) {
  return b
}

app.get('/', (req, res) => {
  console.log(convert(req.query.id))
  // Make no code changes
  let output = ""
  res.send(output)
})

function main() {
  app.listen(port, () => console.log(`Listening on port ${port}!`))
}

if (typeof module != 'undefined' && !module.parent) {
  main()
}