var x = 0;
var y = 0;
var drawShape = "";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function setup(){
    canvas = createCanvas(900,600);
}
function start(){
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    if(content == "Circle" || content == "circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        drawShape = "circle"
        document.getElementById("status").innerHTML = "System has started drawing circle!";
    }else if(content == "Rectangle" || content == "rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        drawShape = "rectangle"
        document.getElementById("status").innerHTML = "System has started drawing rectangle!";
    }
}
function draw(){
    if(drawShape == "circle"){
        var radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        drawShape = "";
        document.getElementById("status").innerHTML = "Circle is drawn!";
    }else if(drawShape == "rectangle") {
        rect(x,y,70,50);
        drawShape = "";
        document.getElementById("status").innerHTML = "Rectangle is drawn!";
    }
}