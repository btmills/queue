// Generated by CoffeeScript 1.6.1

({
  define: typeof define === 'function' ? define : function(A, F) {
    return module.exports = F.apply(null, A.map(require));
  }
}).define([], function() {
  'use strict';
  var Queue;
  return Queue = function() {
    var dequeue, enqueue, first, last, length, peek, q;
    first = 0;
    last = -1;
    q = [];
    enqueue = function(val) {
      return q[++last] = val;
    };
    dequeue = function() {
      var val;
      if (first > last) {
        return void 0;
      }
      val = q[first];
      delete q[first];
      first++;
      return val;
    };
    length = function() {
      return last - first + 1;
    };
    peek = function() {
      if (first > last) {
        return void 0;
      }
      return q[first];
    };
    return {
      enqueue: enqueue,
      dequeue: dequeue,
      length: length,
      peek: peek
    };
  };
});