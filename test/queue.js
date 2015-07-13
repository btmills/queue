var assert = require('chai').assert;
var Queue = require('../lib/queue');

describe('Queue', function () {

	describe('constructor', function () {

		it('should result in an empty queue', function () {
			var q = new Queue();
			assert.equal(q.length, 0);
			assert.strictEqual(q.peek(), undefined);
		});

	});

	describe('enqueue', function () {

		it('should add an item to the end of the queue', function () {
			var q = new Queue();
			q.enqueue('hello');
			assert.equal(q.length, 1);
			assert.equal(q.peek(), 'hello');
			q.enqueue('there');
			assert.equal(q.length, 2);
			assert.equal(q.peek(), 'hello');
			q.dequeue();
			assert.equal(q.peek(), 'there');
		});

	});

	describe('dequeue', function () {

		it('should return the first item from the queue', function () {
			var q = new Queue();
			q.enqueue('hello');
			q.enqueue('there');
			assert.equal(q.peek(), q.dequeue());
		});

		it('should remove the first item from the queue', function () {
			var q = new Queue();
			q.enqueue('hello');
			q.enqueue('there');
			assert.equal(q.length, 2); // Sanity check
			q.dequeue();
			assert.equal(q.length, 1);
			assert.equal(q.peek(), 'there');
		});

		it('should return undefined if the queue is empty', function () {
			var q = new Queue();
			assert.strictEqual(q.dequeue(), undefined);
		});

	});

	describe('peek', function () {

		it('should return the first item in the queue', function () {
			var q = new Queue();
			q.enqueue('hello');
			q.enqueue('there');
			assert.equal(q.peek(), 'hello');
			q.dequeue();
			assert.equal(q.peek(), 'there');
		});

		it('should not alter the queue', function () {
			var q = new Queue();
			q.enqueue('hello');
			q.enqueue('there');
			assert.equal(q.length, 2); // Sanity check
			assert.equal(q.peek(), q.peek());
			assert.equal(q.length, 2);
		});

		it('should return undefined if the queue is empty', function () {
			var q = new Queue();
			assert.strictEqual(q.dequeue(), undefined);
		});

	});

	describe('length', function () {

		it('should return the number of items in the queue', function () {
			var q = new Queue();
			assert.equal(q.length, 0);
			q.enqueue('hello');
			assert.equal(q.length, 1);
			q.enqueue('there');
			assert.equal(q.length, 2);
			q.dequeue();
			assert.equal(q.length, 1);
			q.dequeue();
			assert.equal(q.length, 0);
		});

	});

});
