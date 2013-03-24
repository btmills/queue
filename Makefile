.PHONY: clean test watch

queue:
	coffee -bc -o lib src/queue.coffee

watch:
	coffee -bcw -o lib src/queue.coffee

clean:
	rm lib/queue.js
	rm test/test.*.js

test: queue
	mocha --reporter spec --compilers coffee:coffee-script test/test.node.coffee
	coffee -bc test/test.browser.script.coffee
	open test/test.browser.script.html

