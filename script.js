let PriorityQueue = require('priorityqueuejs');
function mincost(arr) {
  let minHeap = new PriorityQueue(function(a, b) {
    return a - b;
  });
  for(let i = 0; i < arr.length; i++) {
    minHeap.enq(arr[i]);
  }
  let totalCost = 0;
  while(minHeap.size() > 1) {
    let cost = minHeap.deq() + minHeap.deq();
    totalCost += cost;
    minHeap.enq(cost);
  }
  return totalCost;
}
 module.exports=mincost;
	