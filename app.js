const canvas = document.querySelector('canvas');
canvas.width = 600;
canvas.height = innerHeight;


var c = canvas.getContext('2d')
xposition = 200
yposition = 300

// Drawing The Blocks
function  draw(){
    var image = new Image();

    //The Topmost block
    image.src = "images/water-block.png";
    image.onload = function() {
        c.drawImage(image, 0, -50);
        c.drawImage(image, 100, -50);
        c.drawImage(image, 200, -50);
        c.drawImage(image, 300, -50);
        c.drawImage(image, 400, -50);
        c.drawImage(image, 500, -50);
    };

    // The Second Level Rock
    var image1 = new Image();
    image1.src = "images/stone-block.png";
    image1.onload = function() {
        c.drawImage(image1, 0, 30);
        c.drawImage(image1, 100, 30);
        c.drawImage(image1, 200, 30);
        c.drawImage(image1, 300, 30);
        c.drawImage(image1, 400, 30);
        c.drawImage(image1, 500, 30);
    };

    // The Third Level Rock
    var image2 = new Image();
    image2.src = "images/stone-block.png";
    image2.onload = function() {
        c.drawImage(image2, 0, 112);
        c.drawImage(image2, 100, 112);
        c.drawImage(image2, 200, 112);
        c.drawImage(image2, 300, 112);
        c.drawImage(image2, 400, 112);
        c.drawImage(image2, 500, 112);
    };

    // The Fourth Level Rock
    var image3 = new Image();
    image3.src = "images/stone-block.png";
    image3.onload = function() {
        c.drawImage(image3, 0, 190);
        c.drawImage(image3, 100, 190);
        c.drawImage(image3, 200, 190);
        c.drawImage(image3, 300, 190);
        c.drawImage(image3, 400, 190);
        c.drawImage(image3, 500, 190);
    };

    // The Fifth Level Grass
    var image4 = new Image();
    image4.src = "images/grass-block.png";
    image4.onload = function() {
        c.drawImage(image4, 0, 270);
        c.drawImage(image4, 100, 270);
        c.drawImage(image4, 200, 270);
        c.drawImage(image4, 300, 270);
        c.drawImage(image4, 400, 270);
        c.drawImage(image4, 500, 270);
    };

    // The Sixth Level Grass(The Base)
    var image5 = new Image();
    image5.src = "images/grass-block.png";
    image5.onload = function() {
        c.drawImage(image5, 0, 350);
        c.drawImage(image5, 100, 350);
        c.drawImage(image5, 200, 350);
        c.drawImage(image5, 300, 350);
        c.drawImage(image5, 400, 350);
        c.drawImage(image5, 500, 350);
    };

    //The Character Itself
    var image6 = new Image();
    image6.src = "images/char-boy.png";
    image6.onload = function() {
        c.drawImage(image6, xposition, yposition);
    };

}

let positions = [10, 80, 160]
crossed = 0;
// Enemy Blue Print
function Enemy(x, y, dx){
        this.y = y
        this.dx = dx
        this.x = x
    
    this.eliminate = function(){
        this.image = new Image()
        this.image.src = "images/enemy-bug.png"
        c.drawImage(this.image, this.x, this.y)
    }
    this.update = function(){
        if(Math.abs(this.y - yposition)<= 20 && Math.abs(this.x - xposition)<= 90){
            yposition = 300
        }
        if(this.x > 700){
            crossed += 1;
            this.y = positions[Math.floor(Math.random()*positions.length)]
            this.dx = Math.floor((Math.random()+0.5)*10);
            this.x = -70
            this.update()
        }
        if(crossed >= 50 && crossed <= 100){
            console.log(crossed)
            this.dx = Math.floor((Math.random()+0.5)*20)
        }
        if(crossed >= 100 && crossed <= 300){
            console.log(crossed)
            this.dx = Math.floor((Math.random()+0.5)*30)
        }
        if(crossed >= 350 && crossed <= 10000){
            var image7 = new Image();
            image7.src = "images/heart.png";
            image7.onload = function() {
                c.drawImage(image7, 100, 10, 50, 75);
            };        
            console.log(crossed)
            this.dx = Math.floor((Math.random()+0.5)*40)
        }
        this.x +=  this.dx;
        this.eliminate()
    }
}

// Creating Array Of Enemies
let enemies = []
function createEnemy(){
        for(let i = 0; i < 4; i++){
        y = positions[Math.floor(Math.random()*positions.length)]
        spd = Math.floor((Math.random()+0.5)*10);
        x = Math.floor(Math.random() *17) -1
        enemies.push(new Enemy(x, y, spd))
    }
}
createEnemy()

// Moving The Enemies And Drawing The Blocks
function animate(){
    // c.clearRect(0,0,innerWidth, innerHeight)
    requestAnimationFrame(animate)
    draw()
    for(let i = 0; i < enemies.length; i++){
        // createEnemy()
        enemies[i].update()
    }
}
animate()

// Control For The Character
document.onkeydown = function (event) {
    switch (event.keyCode){

        //Left  Key
        case  37:
        xposition -= 100
        if(xposition < 0){
            xposition = 0
        }
        break;

        // Up Key
        case  38:
        yposition -= 75
        if(yposition < -100){
            yposition = 300
        }
        break;

        // Right Key
        case  39:
        xposition += 100
        if(xposition > 500){
            xposition = 500
        }
        break;

        // Down Key
        case  40:
        yposition += 75
        if(yposition > 351){
            yposition = 300
        }
        break;
    }

}
