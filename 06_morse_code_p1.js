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

decodeMorse('.... . -.--   .--- ..- -.. .')
decodeMorse('            ....  ....         ')
