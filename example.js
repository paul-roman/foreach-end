require('./index');

[1, 2, 3].forEachEnd((value, done) => {
	console.log(`${value} starting`);
	setTimeout(() => {
		console.log(`${value} evaluated`);
		done();
	}, 1000);
}, () => {
	console.log('ended!');
});
