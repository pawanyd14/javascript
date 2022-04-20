// different types of functions

//1. anonymous functions

// A funciton without name is called anonymous function.

// example

// below example is call the function expration

var a = function (param1,param2){
	console.log(param1 + "hello i am anonymous functions");
}

// when we call a function then we passed the arguments
a("a","b");


// function statement and function diclaration

function abc(){
	console.log("it is call function statement and we can say this funciton diclaration");
}

abc();

// first class function 

//example


// the ablity to paas any function as argument and return type of any funciton as function is call the first class function
function firstClass(param1){
	console.log("example of firstClass fuction");
	console.log(param1);
	return function(){
		console.log("return function");
	}
}

firstClass(function(){
	return "abc";
});


//Thanks


