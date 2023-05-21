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
})