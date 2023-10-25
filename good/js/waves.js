randomNumber = 0;
randomNumber2 = 0;
randomNumber3 = 0;
beatLength = 1000;
var w = 0
var h = 0

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    w = width
    h = height
    noFill();
    stroke(255)

    lastBeat = 0;

}
function draw() {
    translate(- width /2, - height/2)
    stroke(millis() % 333 / 333 * 255, millis() * 0.13 % 10000 / 10000 * 255, millis() % 1000 / 1000 * 255)
    //Fill Background
    fill(0, 0, 0, 15)
    rect(0, 0, w, h)

    offset = millis() % 1000 / 1000 * 50

    beat = false
    if (millis() > lastBeat + beatLength){
        lastBeat = millis()
        beat = true
    }

    if (beat = true){
        randomNumber = random(50)
        randomNumber2 = random(5)
        randomNumber3 = random(100)
    }

    for (i=0; i < h; i+=50){
        beginShape();
        for (x=0; x < w; x+=50){
            y = i
            if (x % 4 == 0) y = i + offset
            if (x % 100 == 0) y = i + (offset * (-1))
            if (x % randomNumber2 < 0.2) y = i + randomNumber
            if (i % 8 == 0) vertex(x , y);
            if (i % 4 == 0) curveVertex(x , y);
        }
        endShape();
    }
}