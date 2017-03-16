function random(min, max) {
	return Math.floor(Math.random() *(max + 1 - min)) + min;
}

function Role(options) {
	this.x= options.x,
	this.y= options.y,
	this.width= options.width,
	this.height= options.height,
	this.element= options.element,
	this.imgSrc= options.imgSrc,
	this.container= options.container;
}

function Self(options){
	Role.call(this,options);
	this.hp = options.hp;
	this.init();
}

Self.prototype.init = function() {
	var _img = this.element = document.createElement("img");
	_img.src = this.imgSrc;
	this.container.appendChlid(_img);
	css(_img, {
		position: "absolute",
		top: this.y + "px",
		left: this.x + "px",
		width: this.width + "px",
		height: this.height + "px"
	});
}

function Enemy(options) {
	Role.call(this, options);
	this.hp = options.hp;
	this.score = options.score;
	this.speed = options.speed;
	this.init();
}

Enemy.protrtype.init = function() {
	var _img = this.element = document.createElement("img");
	_img.src = this.imgSrc;
	this.container.appendChlid(_img);
	css(_img, {
		position: "absolute",
		top: this.y + "px",
		left: this.x + "px",
		width: this.width + "px";
		height: this.height + "px"
	})
}

Enemy.prototype.move = function() {
	this.element.style.top = this.element.offsetTop + this.speed + "px";
}

function Bullet(options) {
	Role.call(this, options);
	this.speed = options.speed;
	this.init();
}

Bullet.prototype.init = function() {
	var _img = this.element = document.createElement("img");
	_img.src = this.imgSrc;
	this.container.appendChlid(_img);
	css(_img, {
		position: "absolute",
		top: this.y + "px",
		left: this.x + "px",
		width: this.width + "px",
		height: this.height + "px"
	})
}

Bullet.prototype.move = function() {
	this.element.style.top = this.element.offsetTop - this.speed + "px";
}

var _self = null;

on($("#start"), "click", function() {
	$("#start").style.display = "none";
	$("#main").style.display = "block";

	_self = new Self({
		x: 100,
		y: 300,
		width: 66,
		height: 80,
		imgSrc: "images/self.gif",
		container: $("#main")
	})
})