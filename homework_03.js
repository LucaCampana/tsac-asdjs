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

function dec2bin(n){
	var s = new Stack();
	while (n > 0){
		s.push(Math.floor(n % 2));
		n = Math.floor(n / 2);
	}
	var output = "";
	while (!s.isEmpty()) output += s.pop();
	return output;
}
//Notazione polacca 345*-	->	17
