function mincost(arr)
 
//write your code here
// return the min cost
// 	arr.sort((a,b)=>a-b)
// let sum=arr[0];
// 	let mincostAmount=0;
//  for (let i = 1; i < arr.length ;i++) {

// 	 sum=sum+arr[i]
//       mincostAmount+=sum
// }
// return mincostAmount
// module.exports=mincost;




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
}

	