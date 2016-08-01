var x = 3;

function foo(a, b) {

	return a + b;
}

var foo = (function foo(a, b) {

	return a + b;
})

var f = foo;
f(6, 5);


var name = function foo(a, b) {

	return a + b;
}

console.log(f(20,20));