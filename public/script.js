// Data
const canvas = {
	width: window.innerWidth - .5,
	height: window.innerHeight - .5
}

const entities = {
	DRAC: {
		frames: {
			attack: [],
			die: [],
			fly: [],
			hit: []
		}
	},
	DRAGON: {
		frames: {
			attack: [],
			die: [],
			fly: [],
			hit: []
		}
	},
	GOBLIN: {
		frames: {
			attack: [],
			die: [],
			hit: [],
			jump: [],
			run: [],
			walk: []
		}
	}
}

const modelSize = 150;

const drac = {
	attack: null,
	die: null,
	fly: null,
	hit: null
}

const dragon = {
	attack: null,
	die: null,
	fly: null,
	hit: null
}

const goblin = {
	attack: null,
	die: null,
	hit: null,
	jump: null,
	run: null,
	walk: null
}

// Class
class Animatable {
	constructor(frames = [], freezed = false, frameDelay = 5) {
		this.frames = frames;
		this.playFrame = 0;
		this.freezed = freezed;
		this.size = modelSize;

		this.frameDelayDEF = this.frameDelay = frameDelay;
	}

	render({ x: xpos, y: ypos }) {
		image(
			this.frames[this.playFrame],
			xpos || 0,
			ypos || 0,
			this.size,
			this.size
		);

		return this;
	}

	animate() {
		if(--this.frameDelay <= 0) this.frameDelay = this.frameDelayDEF;
		else return this;

		let a = this.playFrame + 1;

		if(this.frames[a]) this.playFrame = a; // continue
		else this.playFrame = 0; // play from the beginning

		return this;
	}
}

// Load
function preload() {
	// Drac -> attack
	[
		'./assets/drac/attack1.png',
		'./assets/drac/attack2.png',
		'./assets/drac/attack3.png'
	].forEach(io => {
		entities.DRAC.frames.attack.push(loadImage(io));
	});

	// Drac -> die
	[
		'./assets/drac/die1.png',
		'./assets/drac/die2.png',
		'./assets/drac/die3.png',
		'./assets/drac/die4.png',
		'./assets/drac/die5.png',
		'./assets/drac/die6.png',
		'./assets/drac/die7.png',
		'./assets/drac/die8.png'
	].forEach(io => {
		entities.DRAC.frames.die.push(loadImage(io));
	});

	// Drac -> fly
	[
		'./assets/drac/fly1.png',
		'./assets/drac/fly2.png',
		'./assets/drac/fly3.png',
		'./assets/drac/fly4.png'
	].forEach(io => {
		entities.DRAC.frames.fly.push(loadImage(io));
	});

	// Drac -> hit
	[
		'./assets/drac/hit1.png',
		'./assets/drac/hit2.png'
	].forEach(io => {
		entities.DRAC.frames.hit.push(loadImage(io));
	});

	// Dragon -> attack
	[
		'./assets/dragon/attack1.png',
		'./assets/dragon/attack2.png',
		'./assets/dragon/attack3.png'
	].forEach(io => {
		entities.DRAGON.frames.attack.push(loadImage(io));
	});

	// Dragon -> die
	[
		'./assets/dragon/die1.png',
		'./assets/dragon/die2.png',
		'./assets/dragon/die3.png',
		'./assets/dragon/die4.png',
		'./assets/dragon/die5.png'
	].forEach(io => {
		entities.DRAGON.frames.die.push(loadImage(io));
	});

	// Dragon -> fly
	[
		'./assets/dragon/fly1.png',
		'./assets/dragon/fly2.png',
		'./assets/dragon/fly3.png',
		'./assets/dragon/fly4.png'
	].forEach(io => {
		entities.DRAGON.frames.fly.push(loadImage(io));
	});

	// Dragon -> hit
	[
		'./assets/dragon/hit1.png',
		'./assets/dragon/hit2.png'
	].forEach(io => {
		entities.DRAGON.frames.hit.push(loadImage(io));
	});

	// Goblin -> attack
	[
		'./assets/goblin/attack1.png',
		'./assets/goblin/attack2.png',
		'./assets/goblin/attack3.png'
	].forEach(io => {
		entities.GOBLIN.frames.attack.push(loadImage(io));
	});

	// Goblin -> die
	[
		'./assets/goblin/die1.png',
		'./assets/goblin/die2.png',
		'./assets/goblin/die3.png',
		'./assets/goblin/die4.png',
		'./assets/goblin/die5.png'
	].forEach(io => {
		entities.GOBLIN.frames.die.push(loadImage(io));
	});

	// Goblin -> hit
	[
		'./assets/goblin/hit1.png',
		'./assets/goblin/hit2.png'
	].forEach(io => {
		entities.GOBLIN.frames.hit.push(loadImage(io));
	});

	// Goblin -> jump
	[
		'./assets/goblin/jump1.png',
		'./assets/goblin/jump2.png',
		'./assets/goblin/jump3.png',
		'./assets/goblin/jump4.png'
	].forEach(io => {
		entities.GOBLIN.frames.jump.push(loadImage(io));
	});

	// Goblin -> run
	[
		'./assets/goblin/run1.png',
		'./assets/goblin/run2.png',
		'./assets/goblin/run3.png',
		'./assets/goblin/run4.png',
		'./assets/goblin/run5.png',
		'./assets/goblin/run6.png',
		'./assets/goblin/run7.png',
		'./assets/goblin/run8.png'
	].forEach(io => {
		entities.GOBLIN.frames.run.push(loadImage(io));
	});

	// Goblin -> walk
	[
		'./assets/goblin/walk1.png',
		'./assets/goblin/walk2.png',
		'./assets/goblin/walk3.png',
		'./assets/goblin/walk4.png',
		'./assets/goblin/walk5.png',
		'./assets/goblin/walk6.png',
		'./assets/goblin/walk7.png',
		'./assets/goblin/walk8.png'
	].forEach(io => {
		entities.GOBLIN.frames.walk.push(loadImage(io));
	});
}

// Initialize
function setup() {
	createCanvas(canvas.width, canvas.height);

	drac.attack = new Animatable(entities.DRAC.frames.attack, false, 5);
	drac.die = new Animatable(entities.DRAC.frames.die, false, 5);
	drac.fly = new Animatable(entities.DRAC.frames.fly, false, 5);
	drac.hit = new Animatable(entities.DRAC.frames.hit, false, 5);

	dragon.attack = new Animatable(entities.DRAGON.frames.attack, false, 5);
	dragon.die = new Animatable(entities.DRAGON.frames.die, false, 5);
	dragon.fly = new Animatable(entities.DRAGON.frames.fly, false, 5);
	dragon.hit = new Animatable(entities.DRAGON.frames.hit, false, 5);

	goblin.attack = new Animatable(entities.GOBLIN.frames.attack, false, 5);
	goblin.die = new Animatable(entities.GOBLIN.frames.die, false, 5);
	goblin.hit = new Animatable(entities.GOBLIN.frames.hit, false, 5);
	goblin.jump = new Animatable(entities.GOBLIN.frames.jump, false, 5);
	goblin.run = new Animatable(entities.GOBLIN.frames.run, false, 5);
	goblin.walk = new Animatable(entities.GOBLIN.frames.walk, false, 5);
}

// IN
function draw() {
	background('white');


	let modelsLine = 0;
	[
		...Object.values(drac),
		...Object.values(dragon),
		...Object.values(goblin)
	].forEach((io, ia) => {
		if(!io) return console.error("Weak code. Required class is falsy");

		// XXX: I AM TOO STUPID FOR THAT. I HAVE, LIKE, 20IQ. I CAN'T REALIZE IT NORMALLY.
		let getX = () => ia * modelSize - modelsLine * (canvas.width - modelSize / 2);
		let ypos = modelSize * ((getX() + modelSize < canvas.width) ? modelsLine : ++modelsLine);
		let xpos = getX();

		io.render({
			x: xpos,
			y: ypos
		}).animate();	
	});
}