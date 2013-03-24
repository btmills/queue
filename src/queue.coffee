# Universal module definition supports node, AMD, script global
# from https://github.com/umdjs/umd/blob/master/returnExports.js
((root, factory) ->
	if typeof exports == 'object'
		module.exports = factory()
	else if typeof define == 'function' and define.amd
		define factory
	else
		root.Queue = factory()
) this, ->

	'use strict'

	# Based on http://tomswitzer.net/2011/02/super-simple-javascript-queue/
	Queue = ->

		first = 0
		last = -1
		q = []

		enqueue = (val) ->
			q[++last] = val

		dequeue = ->
			return undefined if first > last # Empty
			val = q[first]
			delete q[first]
			first++
			val

		length = ->
			last - first + 1

		peek = ->
			return undefined if first > last
			q[first]

		return {
			enqueue: enqueue
			dequeue: dequeue
			length: length
			peek: peek
		}
