var queue;
var stage;

function init() {
       queue=new createjs.LoadQueue();
       queue.addEventListener("complete", loadComplete);
       queue.loadManifest([
           {id:"smiley",src:"Images/images.jpg"}
       ])
}
function loadComplete(){
    setupStage();
    createImage();
}
function setupStage(){
    stage= new createjs.Stage(document.getElementById('canvas'));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick",function(){
        stage.update();
    });
}
function createImage(){
    var img= queue.getResult("smiley");
    var smiley = new createjs.Bitmap(img);
    smiley.x=0;
    smiley.y=0;
    createjs.Tween.get(smiley).wait(1000).to({y:smiley.y+200},1000);
    createjs.Tween.get(smiley).wait(2000).to({x:smiley.x+275},1000);
    //createjs.Tween.get(smiley).wait(5000).to({y:smiley.y},1000);

    //createjs.Tween.get(smiley).wait(4500).to({y:0},1000);
    stage.addChild(smiley);
}
//     canvas =document.getElementById("canvas");   
//     stage = new createjs.Stage(canvas);
//     var image= new Image();
//     image.src="Images/images.jpg";
//     image.onload=imageLoad;
//     // stage.enableMouseOver(20);
//     // createjs.Ticker.setFPS(60);
//     // createjs.Ticker.on("tick", gameLoop, this );
    
// }

// // function gameLoop(event : createjs.TickerEvent) :void {

// //     var myNewText: createjs.Text =new createjs.Text("Text", "60px Arial", "#000000");

// //     stage.addChild(myNewText);
// //     stage.update();
// // }

// function imageLoad(event) {
//     var imgPath=event.target;
//     var img= new createjs.Bitmap(imgPath);
//     stage.addChild(img);
//     stage.update();


// }
