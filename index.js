Object.assign(Array.prototype, {
	forEachEnd(elementCallback, endCallback, thisArg) {
		if (!this.length) {
			if (endCallback)
				endCallback();
			return;
		}

		let counter = 0;
		const done = () => {
			counter++;
			if (counter === this.length && endCallback)
				endCallback();
		};
		this.forEach((value, index, array) => {
			elementCallback(value, done, index, array);
		}, thisArg);
	}
});
