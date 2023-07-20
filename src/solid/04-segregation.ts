interface Bird {
	eat(): void;
}

interface FlyingBird {
	fly(): void;
}
interface RunningBird {
	run(): void;
}
interface SwimmingBird {
	swim(): void;
}

class Tucan implements Bird, FlyingBird {
	public fly() {}
	public eat() {}
}

class Hummingbird implements Bird, FlyingBird {
	public fly() {}
	public eat() {}
}

class Ostrich implements Bird, RunningBird {
	eat() {}
	run() {}
}
class Penguin implements Bird, RunningBird, SwimmingBird {
	swim() {}
	eat() {}
	run() {}
}
