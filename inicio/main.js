let sound
function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  initModel()

  sound = new Pizzicato.Sound()
  sound.play()
}

function draw() {
  background('blue')
  
  //mapeando el tamano del circulo central
  let radius = map(value, 0, 1, 0, 800)
  circle(windowWidth / 2, windowHeight / 2, radius)

  //mapeando el tama;o de los circulos pequenos
  let size =map(value, 0, 1, 0, 50)  

  for (let i = 0; i < 100; i++ ){
    circle(random(windowWidth), random(windowHeight), size)
  }

let frequency = map(value, 0, 1, 100, 1000)
sound.frequency = frequency 
}
