// How Currying in Javascript works
var curry = (fn) => {
    return (arg) => {
        return (arg2) =>{
            return fn(arg, arg2)      
        }
    }
}

// Practical Example
var student = 
          name =>
                gender =>
                      age => 
                        name + ' '+ gender + ' ' + age 


student('Hanna')('Female')('12')
 
//log out Hanna Female 12 
