const getCharacters = require('./characters')
require("emoji-selector")

//background emoji
let a = ""
//letter emoji
let b = ""




let backgroundEmojiSelector = document.querySelector("#backgroundEmojiSelector")
backgroundEmojiSelector.emojiSelected = (char) => {
  $("#backgroundEmoji").val(char)
  Materialize.updateTextFields()
  backgroundEmojiSelector.close()
}

let letterEmojiSelector = document.querySelector("#letterEmojiSelector")
letterEmojiSelector.emojiSelected = (char) => {
  $("#letterEmoji").val(char)
  Materialize.updateTextFields()
  letterEmojiSelector.close()
}



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

var getUserInput = $("#userInput")
getUserInput.keyup(function() {
  var letterEmoji = $("#letterEmoji").val().replace(/\s/g, "")
  var backgroundEmoji = $("#backgroundEmoji").val().replace(/\s/g, "")

  a = backgroundEmoji
  b = letterEmoji

  let characters = getCharacters(a,b)
  var userInput = $("#userInput").val()

  var splitInput = userInput.toUpperCase().split("")
  var preppedInput = []
  preppedInput.push(characters["\u0020"])
  splitInput.forEach(letter => {
      preppedInput.push(characters[letter])
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
