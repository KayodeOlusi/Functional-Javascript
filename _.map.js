
//Using _.map function
const weapons=['candlesticks','lead pipe','revolver'];

const makeBrown = function(item){
return `broken ${item}`;
}

_.map(weapons, makeBrown); 
