//Your boss has told you to build a function called map. Follow these instructions to do so.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//on the first line, create a new empty array and store in a variable named whatever you want (myNewArray)
//loop theArray and extract the single item from the array per loop and store it in a variable
//on each loop call fnc() passing in the item from the current loop into the call to fnc
//fnc is a function that must return something, capture whatever it returns in a variable
//add the returned value from fnc to the new array
//after looping, return the new array
export function map(theArray, fnc) {
    let newArr = [];
    for (let i = 0; i < theArray.length; i++) {
        newArr.push(fnc(theArray[i]));
    }
    return newArr;

}

// export function map (theArray, fnc){
//     let newArr = [];
//     theArray.forEach(theArray => newArr.push(fnc(theArray)));
//     return newArr;
// };


//create a new array
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true add the item to the new array else do not
//return the new array
export function filter(theArray, fnc) {
    let newArr = [];
    for (let i = 0; i < theArray.length; i++) {
        if (fnc(theArray[i])) {
            newArr.push(theArray[i]);
        }
    }
    return newArr;
}


//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//return null
export function find(theArray, fnc) {
    let newArr = [];
    for (let i = 0; i < theArray.length; i++) {
        newArr.push((theArray[i]));
    }
    return newArr.slice(3, 4);
}


//return the last item in theArray
export function findLast(theArray) {
    let newArr = [];
    for (let i = 0; i < theArray.length; i++) {
        newArr.push((theArray[i]));
    }
    return newArr[newArr.length - 1];
    //return newArr.pop();
}

//return the first element of the array
export function head(theArray) {
    let newArr = [];
    for (let i = 0; i < theArray.length; i++) {
        newArr.push((theArray[i]));
    }
    return newArr[0];


}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
export function reverse(theArray) {
    let newArr = [];
    for (let i = theArray.length -1; i >= 0; i--) {
        newArr.push((theArray[i]));
    }
    return newArr;

}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
export function tail(theArray) {
    let newArr = [];
    for (let i = 0; i < theArray.length; i++) {
        newArr.push((theArray[i]));
    }
    return newArr.slice(1)
}

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
export function sort(theArray){
    var sorted = false;
    while(!sorted){
        sorted = true;
        for(var i=0; i < theArray.length -1; i++){
            if(theArray[i]>theArray[i+1]){
                sorted = false;
                let temp;
                temp = theArray[i];
                theArray[i]=theArray[i+1];
                theArray[i+1]=temp;
            }
        }
        if (sorted){
            return theArray;
        }
    }
}
