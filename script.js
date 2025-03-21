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
let sum =0;
let res =0;
while(arr.length!=1)
{ 
arr.sort((a,b)=>
{
					if(a>b)
						return b-a;
					else return a - b;
					return a -b;
});
let sum = arr[0]+arr[1];
res +=sum;
arr.splice(0,2,sum);
arr.sort();
// res+=arr[0];
}
return res;
}

module.exports=mincost;
