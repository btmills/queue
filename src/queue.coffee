# Module patch based on http://www.2ality.com/2011/11/module-gap.html
({ define: if typeof define == 'function' then define \
 		else (A, F) -> module.exports = F.apply(null, A.map(require))
}).define [], ->

	'use strict'

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
