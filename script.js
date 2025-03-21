function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>a-b)
let sum=arr[0];
	let mincostAmount=0;
 for (let i = 1; i < arr.length ;i++) {

	 sum=sum+arr[i]
      mincostAmount+=sum
}
return mincostAmount
module.exports=mincost;

}

	