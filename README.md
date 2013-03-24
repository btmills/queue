# JavaScript queue

This is a queue imlementation for JavaScript (and CoffeeScript) with a convenient API that avoids use of the expensive ([`O(n)`](http://stackoverflow.com/a/11535121)) `Array.shift()` operation.

## API

### Node (CoffeeScript)

Include the component.

```CoffeeScript
Queue = require 'queue'
```

Create a new queue.

```CoffeeScript
q = new Queue
```

Queue up some stuff.

```CoffeeScript
q.enqueue 'hello'
q.enqueue 'world'
```

How big is it?

```CoffeeScript
console.log q.length() # 2
```

What's at the front?

```CoffeeScript
console.log q.peek() # "hello"
```

Remove some stuff.

```CoffeeScript
while q.length() > 0
	console.log q.dequeue() # "hello", "world"
```

### Node (JavaScript)

Include the component.

```JavaScript
var Queue = require('queue');
```

Create a new queue.

```JavaScript
var q = new Queue();
```

Queue up some stuff.

```JavaScript
q.enqueue('hello');
q.enqueue('world');
```

How big is it?

```JavaScript
console.log(q.length()); // 2
```

What's at the front?

```JavaScript
console.log(q.peek()); // "hello"
```

Remove some stuff.

```JavaScript
while (q.length() > 0) {
	console.log(q.dequeue()); // "hello", "world"
}
```

## What's next?

- Support client-side inclusion via script tag
- Document client-side use with require.js/AMD

## License

The MIT License. See LICENSE for full text.
