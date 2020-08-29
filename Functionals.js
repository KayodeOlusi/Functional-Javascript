//Using forEach function to loop
var days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

days.forEach(function(list,index){
	console.log(`${list} is no ${index+1}`)
})


//Using the _.each function to loop
const _ = {};

_.each = function(list,callback){
    if (Array.isArray(list)){
        for(var i=0;i<list.length;i++){
         callback(list[i],i,list);           
}
    } else{
 		for(var key in list){
 			callback(list[key],key,list)
 		}
  }


};

_.each(['sally','georgie','porgie'],function(name,i,list){
if(name[i+1]){
console.log(name,'is younger than,')
} else{
console.log(name,'is the oldest')
}
})


