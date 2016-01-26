'use strict';

module.exports = function () {
	var first = 0;
	var last = -1;
	var q = [];

	var api = {};

	Object.defineProperties(api, {

		length: {
			get: function () {
				return last - first + 1;
			}
		},

		enqueue: {
			value: function (val) {
				last += 1;
				q[last] = val;
				return this.length;
			}
		},

		dequeue: {
			value: function () {
				if (first <= last) {
					var val = q[first];

					delete q[first];
					first += 1;

					return val;
				}
			}
		},

		peek: {
			value: function () {
				return q[first];
			}
		}

	});

	return api;
};
