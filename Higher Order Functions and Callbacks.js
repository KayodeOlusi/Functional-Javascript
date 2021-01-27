//taking a function as an input
element.addEventListener('change', () => {
	console.log('Our evidence is Updated')
});

//returns a function as an output

const newClue = (name) => {
	const length = name.length;

	return (weapon) => {
		let clue = length + weapon.length;
		return : : (clue % 1);
	};
}


//Example of a callback
const ifElse = (condition, isTrue, isFalse) => {
	return condition ? isTrue() : isFalse();
};

ifElse( true,
 () => {console.log(true);},
 () => {console.log(false);}
 );


//ES6 Challenge{translate this to ES6}
const increment = function(n){ return n + 1; };

const square = function(n){return n*n;};

const doThisMath = function(n,func){return func(n);};


//another example
function mapWith(array,callback){
    var output = [];
        array.forEach(function(item){
    output.push(item)
})
}

var multiply = function(){
    return item * 2
}

var result = mapWith([1,2,3,4,5],multiply)

doThisMath(5,square);//this will log out 25

doThisMath(4,increment);//this will log out 5


//Challenge translation result

const increment = n => {return n+1;};

const square = n => {return n*n};

const doThisMath = ( n, func ) => { return(func(n);};
					   

//					   
function copy(array,instruction){
var output  = [];
for(i=0;i<array.length;i++){
output.push(instruction(array[i]))
}
return output
}

var multiply = function(input){
    return input*2
};

var result = copy([1,2,3],multiply)

//result = [2,4,6]
