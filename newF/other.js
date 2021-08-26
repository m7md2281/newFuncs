// update this function to return the type is other if no parameters passed
function fn(type){
    //(typeof fn === 'undefined') ? "other" : type;
    if (type === undefined) {
        return 'other';
      }

   

}

//var fsn = (typeof type === 'undefined') ? "others" : type;

// you can't touch this line
console.log(fn()) 
//console.log(fsn)

// note you can solve this question using both arrow and normal function