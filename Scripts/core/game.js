var canvas;
var stage;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop, this);
}
function gameLoop(event) {
    var myNewText = new createjs.Text("Text", "60px Arial", "#000000");
    stage.addChild(myNewText);
    stage.update();
}
//# sourceMappingURL=game.js.map