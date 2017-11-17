const getCharacters = require('./characters')

//background emoji
let a = ""
//letter emoji
let b = ""

//copyPasta function
var copyButton = document.querySelector("#copyThePasta")
copyButton.addEventListener('click', function(event) {
  var copyPasta = document.querySelector('#copyPasta');
  copyPasta.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying teat command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
})

var getUserInput = document.querySelector("#getUserInput")
getUserInput.addEventListener('click', function(event) {
  var backgroundEmoji = document.querySelector("#backgroundEmoji").value
  var letterEmoji = document.querySelector("#letterEmoji").value
  a = backgroundEmoji
  b = letterEmoji
  const characters = getCharacters(a,b)

  var userInput = document.querySelector("#userInput").value
  console.log(userInput);

  var splitInput = userInput.toUpperCase().split("")
  var preppedInput = []
  preppedInput.push(characters.space)
  splitInput.forEach(letter => {
    var tempLetter = characters[letter]
    preppedInput.push(tempLetter)
  })
  createEmojiMonster(preppedInput)
})

function createEmojiMonster(array) {
  let emojiMonster = ["","","","","","",""]
  array.forEach(letter => {
    for (var x = 0; x < letter.length; x++) {
     emojiMonster[x] += letter[x]
    }
  })
 populateEmojiTextBox(emojiMonster)
}

function populateEmojiTextBox(array) {
//template literal must be against sidebar to avoid unwanted spacing
document.querySelector("#copyPasta").value = (
`${array[0]}
${array[1]}
${array[2]}
${array[3]}
${array[4]}
${array[5]}
${array[6]}`)
}
