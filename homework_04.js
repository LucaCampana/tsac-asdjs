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

//rpn

function rpn(s){
	var stack = new Stack();
	var elements = s.split(" ");
	for (var i = 0; i < elements.length; i++){
		var result = 0;
		switch (elements[i]){
			case "+":
				result = stack.pop();
				result += stack.pop();
				stack.push(result);
				break;
			case "-":
				result = stack.pop();
				result = stack.pop() - result;
				stack.push(result);
				break;
			case "*":
				result = stack.pop();
				result *= stack.pop();
				stack.push(result);
				break;
			case "/":
				result = stack.pop();
				result = stack.pop() - result;
				result = Math.floor(result);
				stack.push(result);
				break;
			default:
				stack.push(parseInt(elements[i]));
		}
	}
	return stack.pop();
}
//Notazione polacca 345*-	->	17
