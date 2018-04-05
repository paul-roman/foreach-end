require('./dist/index');

[1, 2, 3, 4].forEachEnd((value, done) => {
	console.log(`${value} evaluated`);
	done();
}, () => {
	console.log('ended!');
});

['a', 'b', 'c', 'd'].forEachEnd((value, done, index, array) => {
	console.log(`${index + 1} / ${array.length} => ${value} starting`);
	setTimeout(() => {
		console.log(`${value} evaluated`);
		done();
	}, 1000);
}).then(() => {
	console.log('ended!');
});
