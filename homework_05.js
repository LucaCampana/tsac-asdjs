//Campana Luca TSAC

function PriorityQueue(){
	this.queue = [];
}

function QueueItem(){
	this.item = "?";
	this.priority = 0;
}

function QueueItem(v, p){
	this.item = v;
	this.priority = p;
}

PriorityQueue.prototype.dequeue = function(){
	return this.queue.pop();
}

PriorityQueue.prototype.front = function(){
	return this.queue[this.queue.length - 1];
}

PriorityQueue.prototype.size = function(){
	return this.queue.length;
}

PriorityQueue.prototype.isEmpty = function(){
	return this.size() == 0;
}

PriorityQueue.prototype.enqueue = function(x){
		for (var i = 0; i < this.size() && x.priority > this.queue[i].priority; i++);
		this.queue.splice(i, 0, x);
}


/*PriorityQueue.prototype.enqueue = function(x){
	if (this.isEmpty()) this.queue[0] = x;
	else {
		var i = 0;
		while (i < this.size() && x.priority > this.queue[i].priority) {
			console.log("i: " + i + "/" + (this.size()) + " " + x.priority + " > " + this.queue[i].priority + " ? ");
			i++;
		}
		this.queue.splice(i, 0, x);
	}
}*/






function PriorityQueueCallback(){
	this.queue = [];
}

PriorityQueueCallback.prototype.dequeue = function(){
	return this.queue.pop();
}

PriorityQueueCallback.prototype.front = function(){
	return this.queue[this.queue.length - 1];
}

PriorityQueueCallback.prototype.size = function(){
	return this.queue.length;
}

PriorityQueueCallback.prototype.isEmpty = function(){
	return this.size() == 0;
}

PriorityQueueCallback.prototype.callback = function(p1, p2){
	return p1.priority > p2.priority ? 1 : p1.priority == p2.priority ? 0 : -1;
}

/*PriorityQueueCallback.prototype.enqueue = function(x){
		for (var i = 0; i < this.size() && x.priority > this.queue[i].priority; i++);
		this.queue.splice(i, 0, x);
}*/

PriorityQueueCallback.prototype.enqueue = function(x){
	for (var i = 0; i < this.size() && this.callback(x, this.queue[i]); i++);
	this.queue.splice(i, 0, x);
}







function CircularQueue(n){
	this.queue = [];
	for (var i = 0; i < n; i++) this.queue.push(undefined);
	this.startIndex = 0;
	this.endIndex = 0;
}

CircularQueue.prototype.size = function(){
	return this.queue.reduce((a,b) => b == undefined ? a : a + 1, 0);
	/*var a = this.startIndex;
	var b = this.endIndex;
	if (a == b) return this.isEmpty() ? 0 : this.queue.length;
	return a > b ? a - b : b - a;*/
}

CircularQueue.prototype.isEmpty = function(){
	for (var i = 0; i < this.queue.length; i++) if (this.queue[i] != undefined) return false;
	return true;
}

CircularQueue.prototype.enqueue = function(x){
	if (this.size() == this.queue.length) return;
	this.queue[this.startIndex] = x;
	this.startIndex = this.startIndex == this.queue.length - 1? 0 : this.startIndex + 1;
}

CircularQueue.prototype.dequeue = function(x){
	if (this.size() == 0) return;
	var out = this.queue[this.endIndex];
	this.queue[this.endIndex] = undefined;
	this.endIndex = this.endIndex ==  this.queue.length - 1? 0 : this.endIndex + 1;
	return out;
}

