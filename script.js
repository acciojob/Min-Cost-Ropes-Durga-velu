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
