// if you have a function that needs more then one type to be checked you can use union types
// union types are written like the function below. To allow two types you just need to use a OR operator (|)
function combine(input1: number | string , input2: number |string) {
    let result;

    //when creating a union typescript doesn't check what are the types you have added so having a + like the comment below confuses typescript
    // result = input1 + input2
    //so instead we have created this if statement (however this if statement will not resolve the issue with every type)
    //if its a number then add the two numbers together
    //else turn the inputted values into strings and then return the result 
    if(typeof input1 === 'number' && typeof input2 === 'number'){
      result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = combine(30, 26)
console.log(combinedAges)

const combinedNames = combine('Max', 'Anna')
console.log(combinedNames)