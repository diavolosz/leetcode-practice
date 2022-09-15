

// function pigIt(str){
  
//   let splitStr = str.split(" ")

//   let output = splitStr.map((eachWord) => {

//     if (eachWord.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)) {
//       return eachWord
//     } else {
//       let splitWord = eachWord.split('')
//       let firstLetter = splitWord.shift()
//       splitWord.push(firstLetter)
//       splitWord.push('ay')
//       return splitWord.join("")
//     }
//   })
//   console.log(output)
//   console.log(output.join(' '))
//   return output.join(' ')
// }



function pigIt(str){
  
  let splitStr = str.split(" ")

  let output = splitStr.map((eachWord) => {

    if (eachWord.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)) {
      return eachWord
    } else {
      let remainingBody = eachWord.slice(1)
      return remainingBody + eachWord[0] + 'ay'
    }
  })
  return output.join(' ')
}




pigIt('Pig latin is cool')
pigIt('Hello world ?')
pigIt('O tempora o mores !')