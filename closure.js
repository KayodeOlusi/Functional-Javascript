//Simple example of closure

function createFunction(){
  function multiplyBy2(num){
      return num * 2;
  }
  return multiplyBy2;
}

const generalFunc = createFunction();
const result = generalFunc(3);

//Logging out result is equal to 6
