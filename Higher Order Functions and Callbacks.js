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

