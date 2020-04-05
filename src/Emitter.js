class Emitter {
	constructor() {
		this.events = {};
	}
	on(eventName, cb) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
		this.events[eventName].push(cb);
	}
	emit(eventName, data) {
		if (!this.events[eventName]) {
			return;
		}
		this.events[eventName].forEach(f => f(data));
	}
	removeListener(eventName, cb) {
		if (this.events[eventName]) {
			const index = this.events[eventName].indexOf(cb);
			if (index === -1) {
				return;
			}
			this.events[eventName].splice(index, 1);
		}
	}
}
