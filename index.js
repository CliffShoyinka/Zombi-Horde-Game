import * as PIXI from "pixi.js";




let canvasSize = 256;
const canvas = document.getElementById("mycanvas");
const app = new PIXI.Application( {
    view: canvas,
    width: cansvaSize,
    height: canvasSize,
    backgroundColor: 0x5c812f
});

let squareWidh = 32;
const square = new PIXI.Sprite(PIXI.Texture.White);
square.anchor.set(0.5);
square.position.set(app.screen.width/2, app.screen.height/2);
square.width = square.height = squareWidth;
square.tint = 0xea985d;

app.stage.addChild(square);

app.ticker.add((delta) => {
    const cursorPosition = app.renderer.plugins.interaction.mouse.global;
    let angle = Math.atan2(cursorPosition.y - square.postion.y, cursorPosition.x - square.postion.x
        ) + 
        Math.PI / 2;
        square.rotation = angle;
});

function randomSpawnPoint() {
    let edge = 0; //Math.floor(Math.random() * 4); //random int between 0 and 3 inclusive
    let spawnPoint = new Victor(0,0);
    switch(edge) {
        case 0:
            spawnPoint.x = canvasSize * Math.random();
            break;
        default:
            break;
    }

    return spawnPoint;
}