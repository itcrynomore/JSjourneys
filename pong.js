var animate = window.requestAnimationFrame || //sets window and animate variable
window.webkitRequestAnimationFrame || //requests the webkit for RequestAnimationFrame
window.mozRequestAnimationFrame ||
function(callback){ window.setTimeout(callback, 1000/60)}; //Sets the FPS

var canvas = document.createElement('canvas'); //creates the canvas element
var width = 400; // specifies the width
var height = 600; // specifies the height
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d'); //gets context for 2d rendering

window.onload = function(){
    document.body.appendChild(canvas);
    animate(step); // 3 things, updates all of our objects, render objects, requestAnimationFrame to call step function again
};

var step = function() {
    update();
    render();
    animate(step);
};

var update = function(){
};

var render = function(){
    context.fillStyle = "#FF0000";
    context.fillRect(0, 0, width, height);
};

function Paddle(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.x_speed = 0;
    this.y_speed = 0;
}

Paddle.prototype.render = function(){
    context.fillStyle = "0000FF";
    context.fillRect(this.x, this.y, this.width, this.height);
};

function Player(){
    this.paddle = new Paddle(175, 580, 50, 10);
}
function Computer(){
    this.paddle = new Paddle(175, 10, 50, 10);
}

Player.prototype.render = function(){
    this.paddle.render();
};

Computer.prototype.render = function(){
    this.paddle.render();
};

function Ball(x, y){
    this.x = x;
    this.y = y;
    this.x_speed = 0;
    this.y_speed = 0;
    this.radius = 5;
}

Ball.prototype.render = function(){
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    context.fillStyle = "000000";
    context.fill();
};

var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);

var render = function(){
    context.fillStyle = "FF00FF";
    context.fillRect(0, 0, width, height);
    player.render();
    computer.render();
    ball.render();
};



