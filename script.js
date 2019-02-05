const entities = {

}

class Entity {
	constructor() {
		this.frames = [];
		this.leftFrames = this.frames.length;
		this.freezed = false;
	}
}

function preload() {
	// Load your models here...
}

function setup() {
	createCanvas(innerWidth - .5, innerHeight - .5);
}

function draw() {
	background('white');
}