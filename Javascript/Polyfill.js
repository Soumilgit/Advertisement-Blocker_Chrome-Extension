

const arr = [1,2,3,4,5]

Array.prototype.forEach = null


if(!Array.prototype.forEach)
{
   Array.prototype.forEach = function(callbackFunction){
   
   for(let val of this)
        callbackFunction(val)
   }
}

arr.forEach((val) => {
    console.log(val * 2)
})