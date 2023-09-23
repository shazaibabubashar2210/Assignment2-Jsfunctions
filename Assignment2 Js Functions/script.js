console.log("**************************Task1********************");
function sum(a,b)
{
    return a+b;
}
console.log(`Sum of two number is ${sum(5,2)}`);
console.log("*************************Task2**********************");
let factorial=function(num)
{
    fact=1;
    for(let i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    console.log("Factorial of",num," is",fact);
}
factorial(5);
console.log("*************************Task3**********************");
let printArray=function(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}
let highorder=function(fun,arr)
{
    fun(arr);
}
let arr=[1,2,3,4,5];
highorder(printArray,arr);

console.log("*************************Task4**********************");

(function(){
    console.log("Hello World");
})();

console.log("*************************Task5**********************");

setTimeout(function print(){
    console.log("Hello World");
},2000,print);

console.log("*************************Task6**********************");
let getEvenElements=()=>{
    let arr=[1,2,3,4,5];
    console.log("-----Even Elements-----");
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            console.log(arr[i]);
        }
    }
}
getEvenElements();

console.log("*************************Task7**********************");
(function(num){
    console.log(`Square of  ${num} is ${num*num}`);
})(3);

console.log("*************************Task8**********************");
setInterval(fun=()=>{
        console.log("Hello World!");
    },1000)
    
console.log("*************************Task9**********************");
let getLargestElement=function(myarrayarr){
    let max=0;
    for(let i=0;i<myarrayarr.length;i++)
    {
        if(max<myarrayarr[i])
        {
            max=myarrayarr[i];
        }
    }
    return max;
}
let myarray=[1,-1,2,-2,3,78];
let getmax=getLargestElement(myarray);
console.log(`Maximum element present in the array is ${getmax}`);

console.log("*************************Task10**********************");

let firstCharacterCapital=function(str)
{
    return str[0].toUpperCase()+str.substr(1);
}
let change=function(fun,str)
{
    return fun(str);
}
let res=change(firstCharacterCapital,"shazaib");
console.log(`Change String is ${res}`);

