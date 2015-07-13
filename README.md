# JavaScript queue

This is a queue implementation for JavaScript with a convenient API that avoids use of the expensive ([`O(n)`](http://stackoverflow.com/a/11535121)) `Array.shift()` operation.

## Usage

```js
var Queue = require('o1queue');
```

Create a new queue.

```js
var q = new Queue();
```

Queue up some stuff.

```js
q.enqueue('hello');
q.enqueue('world');
```

How big is it?

```js
console.log(q.length); // 2
```

What's at the front?

```js
console.log(q.peek()) // 'hello'
```

Remove some stuff.

```js
while (q.length > 0) {
	console.log(q.dequeue()) // 'hello', 'world'
}
```

## License

Copyright &copy; 2015 Brandon Mills. All rights reserved. Licensed under the MIT License, the full text of which is available in [LICENSE](LICENSE).
