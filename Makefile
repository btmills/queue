.PHONY: clean test watch

queue:
	coffee -bc -o lib src/queue.coffee

watch:
	coffee -bcw -o lib src/queue.coffee

clean:
	rm lib/queue.js

test: queue
	coffee -c test/test.coffee
	mocha
	rm test/test.js
