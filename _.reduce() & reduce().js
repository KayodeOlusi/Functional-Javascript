//Basic implementation of _.reduce
_.reduce([1,2], function(sum,n){
  return sum + n;
}, 0)
//This logs out 3


//Using reduce with an initial value
const reduce = function(list,callback,initial){
	let memo = initial;
	
	for (let i = 0; i < list.length; i++) {
		if (i===0 && memo === undefined) {
			memo = list[0]
		}else{
			memo = callback(list[i],memo)
		}
	}
	return memo;
};

reduce([1,2,3],(v,sum) => {v+sum}, 0);

//Using reduce without an initial value
const reduce = function(list,callback,initial){
	let memo = initial;
	
	for (let i = 0; i < list.length; i++) {
		if (i===0 && memo === undefined) {
			memo = list[0]
		}else{
			memo = callback(list[i],memo)
		}
	}
	return memo;
};

reduce([2,3,5],(v,sum) => {v+sum});


const doThisMath = ( n, func ) => { return(func(n);};
