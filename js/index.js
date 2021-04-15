const canvas = document.querySelector(`#canvas`)
canvas.width = 500
canvas.height = 700
const ctx = canvas.getContext("2d")



let bg = new Image()
bg.src = 'images/road.png'
bg.onload = function () {
  ctx.drawImage(bg, 0, 0, 500, 700)
}

let cr = new Image()
cr.src = 'images/car.png'
cr.onload = function () {
  ctx.drawImage(cr, 225, 550, 50, 100)
}



class Ob {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = "red";
  }
  draw = () => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.h, this.w)
  }
  move = () => {
    this.y += 2;
  }
}

// let ob1 = new Ob(100, 0, 100, 100)




let car = {
  x: 225,
  y: 550,
  h: 50,
  w: 100,
  draw: function () {
    ctx.drawImage(cr, this.x, this.y, this.h, this.w)
  }
}



let road = {
  x: 0,
  y: 0,
  h: 700,
  w: 500,
  draw: function () {
    ctx.drawImage(bg, 0, 0, 500, 700)
  }
}

setInterval(function () {
  o.push(new Ob(Math.random() * canvas.width, 0, 20, Math.random() * canvas.height))
  score += 1
}, 2000)

let o = []
let score = 0


window.onkeydown = function (e) {
  if (e.key === 'ArrowLeft') {
    if (car.x < 50) {
      player.x = 0;
    } else {
      car.x -= 15
    }
  }
  if (e.key === 'ArrowRight') {
    if (car.x > 450) {
      player.x = 450;
    } else {
      car.x += 15
    }
  }
}



function animate() { //Your rendering engine 
  gameInt = requestAnimationFrame(animate) //Infinte loop
  ctx.clearRect(0, 0, canvas.width, canvas.height) //Flip to a new page >> 
  road.draw()
  car.draw()
  // ob1.draw()
  // ob1.move()

  o.forEach(eachOb => {
    eachOb.move()
    eachOb.draw()
  })
  ctx.fillText(score, 10, 10, 200, 00)


}





window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    animate();
  };


};
