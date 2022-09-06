const MORSE_CODE = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ","
};

decodeMorse = function (morseCode) {

  const splitCode = morseCode.trim().split(" ")
  const splitCodeSpaceRemove = []
  splitCode.forEach((char, index) => {
    if (splitCode[index + 1] === "" && char === "") {
      return;
    }
    splitCodeSpaceRemove.push(char)
  })
  let output = splitCodeSpaceRemove.map((each) => {
    if (each === '') {
      return " "
    }
    return MORSE_CODE[each]
  }).join('')

  console.log(output)
  return output
}



var decodeBits = function (bits) {

  const splitBit = bits.split('0')

  const splitBitRemovedSpace = []

  splitBit.forEach((char, index) => {
    if (splitBit[index + 1] !== "" && char === "") {
      return;
    }
    splitBitRemovedSpace.push(char)
  })

  const splitBySpace = []

  splitBitRemovedSpace.forEach((char, index) => {
    if (splitBitRemovedSpace[index - 1] === "" && char === "") {
      return splitBitRemovedSpace.slice(index, 1)
    } else {
      return splitBySpace.push(char)
    }
  })

  const transformedBits = splitBySpace.map((each) => {
    if (each === '11') {
      return '.'
    } else if (each === '') {
      return ' '
    } else {
      return '-'
    }
  })

  console.log(transformedBits.join(''))
  return transformedBits.join('')
}






decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))