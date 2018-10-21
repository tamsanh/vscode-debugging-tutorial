const express = require('express')
const url = require('url')

const app = express()
const port = 8080

function convert(b) {
  return b
}

function main(req, res) {
  console.log(convert(req.query.id))
  // Change this output, live, to be 'Hello' when a2 is run
  // Make no code changes
  let output = ""
  res.send(output)
}

app.get('/', main)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
