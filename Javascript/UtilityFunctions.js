
function nonUtilityFunction()
{
    console.log("side effect");
    x = 3 
    localStorage.setItem("x", "y") 
    document.body.append((document.createElement('div'))) 
}


function nonUtilityFunction2(x)
{
    return Math.pow(x, 3) * Math.random() 
}

console.log(nonUtilityFunction(3))


function utilityFunction(x)
{
    return Math.sqrt(x);
}

console.log(utilityFunction(25)) 