function main() {
  let helloWorldMessage = "Hello World!"
  console.log(helloWorldMessage)
}

if (typeof module != 'undefined' && !module.parent) {
  main()
}