//Complessita' tempo O(n)	tempo O(n)
function recursionT(array){
	if (array.length == 0) return 10;
	return (5 * array[0]) + recursionT(array.slice(1));
}

function sumEvenSquare(array){
	return reSumEvenSquare(array, 0);
}

function reSumEvenSquare(array, sum){
	if (array.length == 0) return sum;
	var n = array.pop();
	if (n % 2 == 0) sum += (n*n);
	return reSumEvenSquare(array, sum);
}

//Complessita' di tempo O(n)
function fuSumEvenSquare(array){
	if (array.length == 0) return 0;
	return array.filter(x => x % 2 == 0).reduce((acc, x) => acc + (x * x), 0);
}


function Stack(){
	this.array = [];
}

Stack.prototype.push = function(x){
	this.array.push(x);
}

Stack.prototype.pop = function(){
	return this.array.pop();
}

Stack.prototype.peek = function(){
	return this.array[this.array.length - 1];
} 

Stack.prototype.isEmpty = function(){
	return this.array.length == 0;
}

function oddEvenStackSum(array){
	var even = new Stack();
	var odd = new Stack();
	array.forEach(x => {
		if (x % 2 == 0) even.push(x);
		else odd.push(x);
	});
	var result = new Stack();
	while (!even.isEmpty() && !odd.isEmpty()) result.push(even.pop() * odd.pop());
	var output = 0;
	while (!result.isEmpty()) output += result.pop();
	return output;
}


function LinkedList(){
	this.list = [];
}

LinkedList.prototype.add = function(index, value){
	this.list[index] = value;
}

LinkedList.prototype.get = function(index){
	return this.list[index];
}



function ex_1a(array){
	return recursionT(array);
}

function ex_1b(array){
	return sumEvenSquare(array);
}

function ex_2(array){
	return fuSumEvenSquare(array);
}

function ex_3(array){
	return oddEvenStackSum(array);
}


