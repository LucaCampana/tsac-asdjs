function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];



function evaluate(callback) {
	return callback(_0xd10d[0]);
}

function sumArray(array) {
	return array.reduce((a, b) => a + b, 0);
}

/*
Esercizio Ricorsione (15 punti)
Dato l' array A creato dalla funzione initialArray() sviluppare un algoritmo ricorsivo 
non di coda in javascript che restituisca il numero di elementi presenti in A che corrispondono al valore 5070.
*/

function equals5070(array) {
	if (array.length == 0) return 0;
	return (array[0] == 5070 ? 1 : 0) + equals5070(array.slice(1));
}

/*
Esercizio filter/map/reduce (15 punti)
Dato l' array A creato dalla funzione initialArray() sviluppare un algoritmo in javascript che restituisca la radice quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari.
Si implementi l' algoritmo utilizzando almeno una volta tutti i seguenti metodi dell' oggetto Array: filter, map e reduce.
*/

function sumPositiveSquare(array) {
	return Math.sqrt(array.filter(x => x >= 0 && x % 2 == 0)
	.map(x => x * x)
	.reduce((a, b) => a + b, 0));
}



function Stack() {
	this.array = [];
}

Stack.prototype.push = function(x) {
	this.array.push(x);
}

Stack.prototype.pop = function() {
	return this.array.pop();
}

Stack.prototype.peek = function() {
	return this.array[this.array.length - 1];
} 

Stack.prototype.isEmpty = function() {
	return this.array.length == 0;
}

/*
Esercizio Stack (25 punti)

evaluateExpression(
Si noti che ogni carattere dell espressione seguito da uno spazio.

Suggerimento: un possibile algoritmo, qui descritto, richiede utilizzo di due stack. 
Algoritmo: Si legga i caratteri che compongono lespressione da sinistra a destra e si inserisca ogni valore numerico incontrato in uno stack V, mentre ogni operatore incontrato (+, -, *, /) o ogni parentesi aperta, in uno stack S.
Nel caso si incontri durante la lettura dellespressione la parentesi chiusa allora:
si rimuova due elementi numerici dallo stack V
si rimuova loperatore dallo stack e la parentesi aperta dallo stack S
Si esegua loperazione tra gli elementi numerici (in ordine inverso rispetto a come sono stati estratti) e loperatore estratto.
Si inserisca il risultato dellperazione nello stack V.

Quando non ci sono pilementi da analizzare nelespressione, lelemento rimanente in testa allo stack V corrisponde al risultatopressione.
*/

function evaluateExpression(expression) {
	var v = new Stack();
	var s = new Stack();
	var elements = expression.split(" ");
	for (var i = 0; i < elements.length; i++){
		switch (elements[i]){
			case "+":
			case "-":
			case "*":
			case "/":
			case "(":
				s.push(elements[i]);
				break;
			case ")":
				var n1 = v.pop();
				var n2 = v.pop();
				var op = s.pop();
				s.pop();
				v.push(evaluateOperator(n2, n1, op));
				break;
			default:
				v.push(parseInt(elements[i]));
		}
	}	
	return v.pop();
}

function evaluateOperator(n1, n2, op) {
	switch (op){
		case "+":
			return n1 + n2;
		case "-":
			return n1 - n2;
		case "*":
			return n1 * n2;
		case "/":
			return n1 / n2;
	}
	return "?";
}






function Node(i, l, r) {
	this.item = i;
	this.left = l;
	this.right = r;
}

function BST() {
	this.root = null;
}

BST.prototype.addNode = function(currentNode, newNode) {
	if (newNode.item < currentNode.item){
		if (currentNode.left == null) currentNode.left = newNode;
		else this.addNode(currentNode.left, newNode);
	}
	else {
		if (currentNode.right == null) currentNode.right = newNode;
		else this.addNode(currentNode.right, newNode);
	}
}

BST.prototype.add = function(item) {
	if (this.root == null) this.root = new Node(item, null, null);
	else this.addNode(this.root, new Node(item, null, null));
}

BST.prototype.insertArray = function(array) {
	array.forEach(x => this.add(x));
}

/*BST.prototype.getMax = function(){
	return this.getMaxValue(this.root);
}*/

/*BST.prototype.getMaxValue = function(currentNode){
	if (currentNode.item == null) return 0;
	var max = currentNode.item;
	if (currentNode.right != null){
		var rMax = this.getMaxValue(currentNode.right);
		max = Math.max(max, rMax);
	}
	if (currentNode.left != null){
		var lMax = this.getMaxValue(currentNode.left);
		max = Math.max(max, lMax);
	}
	return max;
}*/

BST.prototype.getMax = function() {
	return this.getMaxValue(this.root);
}

BST.prototype.getMaxValue = function(currentNode) {
	if (currentNode.right == null) return currentNode.item;
	else return this.getMaxValue(currentNode.right);
}
