// let PriorityQueue = require('priorityqueuejs');
// function mincost(arr) {

// if (arr.length===0) {
// 	return 0
// }
	
//   let minHeap = new PriorityQueue(function(a, b) {
//     return a - b;
//   });
//   for(let i = 0; i < arr.length; i++) {
//     minHeap.enq(arr[i]);
//   }
//   let totalCost = 0;
//   while(minHeap.size() > 1) {
//     let cost = minHeap.deq() + minHeap.deq();
//     totalCost += cost;
//     minHeap.enq(cost);
//   }
//   return totalCost;
// }
//  //module.exports=mincost;


// let arr=[4,3,2,6]

// console.log(mincost(arr))








function mincost(arr)
{ 
//write your code here
// return the min cost
let result=0;
while(arr.length>1)
{ 
arr.sort((a,b)=>
{
     return a -b;
});
let first= arr.shift();
	let second=arr.shift();

	let sum=first+second
	result +=sum;
	arr.push(sum)
}
return result;
}

module.exports=mincost;
