# JavaScript queue

This is a queue imlementation for JavaScript (and CoffeeScript) with a convenient API that avoids use of the expensive ([`O(n)`](http://stackoverflow.com/a/11535121)) `Array.shift()` operation.

## Including

### Node (CoffeeScript)

```CoffeeScript
Queue = require 'queue'
```

### Node (JavaScript)

```JavaScript
var Queue = require('queue');
```

### Browser (via `<script>` tag)

```HTML
<!DOCTYPE html>
<html>
<head>
	...
</head>
<body>
	...
	<script src="queue.js"></script>
	<script>
		// Queue is now a global variable
	</script>
</body>
</html>
```

## Usage

### CoffeeScript

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

### JavaScript

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

- Document client-side use with require.js/AMD

## License

The MIT License. See LICENSE for full text.
