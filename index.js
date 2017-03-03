function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var apples = ['spartan', 'courtland', 'empire', 'macintosh']

  apples.forEach(callback)
  return apples
}

function doToArray(array, callback) {
  array.forEach(callback)
}
