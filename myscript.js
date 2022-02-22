var colorBoxes = document.querySelectorAll('.color-box')
var code = document.querySelector('.rgb-color')
var boxCount = 6
var colors = generateRandomColor(boxCount)
var pickedColor = colors[Math.floor(Math.random() * 6)]
code.textContent = pickedColor
var reset = document.querySelector('#reset')

var controlText = document.querySelector('.start-game')
controlText.textContent = 'CLICK AND PLAY '

function randomColor() {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

function generateRandomColor(num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr
}

function changeColor(color) {
  for (var i = squares.length - 1; i >= 0; i--) {
    squares[i].style.background = color
  }
}

for (var i = 0; i < colors.length; i++) {
  colorBoxes[i].style.background = colors[i]

  colorBoxes[i].addEventListener('click', function () {
    var selectedColor = this.style.background
    console.log(selectedColor)
    console.log(pickedColor)
    if (selectedColor === pickedColor) {
      win()
    } else {
      loose(this)
    }
  })
}

function win() {
  for (var i = 0; i < colors.length; i++) {
    colorBoxes[i].style.background = pickedColor
  }
  document.querySelector('h1').style.background = pickedColor

  controlText.textContent = 'You Won'
  controlText.style.color = 'rgb(47, 47, 47)'
}

function loose(a) {
  console.log(a)
  a.style.background = 'rgb(47, 47, 47)'
  controlText.textContent = 'TRY AGAIN'
}
