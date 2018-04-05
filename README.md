# foreach-end
[![license](https://img.shields.io/github/license/paul-roman/foreach-end.svg?style=flat-square)](https://github.com/paul-roman/foreach-end/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/foreach-end.svg?style=flat-square)](https://www.npmjs.com/package/foreach-end)

This library allows you to iterate over arrays with a final operation that can be executed when all the others are completed.

### Changelog
#### 1.1.0 (05/04/2018)

- The function can now be used with promises

The `forEachEnd` method on `Array` object can be used in the same way as a standard `forEach` but with small API changes:
- A `done` function is provided inside the callback that need to be called when your individual task is performed 
- A second callback is required by the method that will be executed at the end of the loop

```javascript
// CommonJS
require('foreach-end');
// ES6
import 'foreach-end';

[1, 2, 3, 4].forEachEnd((value, done) => {
	console.log(`${value} evaluated`);
	done();
}, () => {
	console.log('ended!');
});

/*
Output:
1 evaluated
2 evaluated
3 evaluated
4 evaluated
ended!
*/
```

You can still use `index` and `array` provided by standard API. Also the function is compatible with `Promises`!
```javascript
['a', 'b', 'c', 'd'].forEachEnd((value, done, index, array) => {
	console.log(`${index + 1} / ${array.length} => ${value} starting`);
	setTimeout(() => {
		console.log(`${value} evaluated`);
		done();
	}, 1000);
}).then(() => {
	console.log('ended!');
});

/*
Output:
1 / 4 => a starting
2 / 4 => b starting
3 / 4 => c starting
4 / 4 => d starting
a evaluated
b evaluated
c evaluated
d evaluated
ended!
*/
```

The library also comes with a Typescript definition extension for the `Array` interface, so if you're using TypeScript everything is fine!
