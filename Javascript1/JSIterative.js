//Campana Luca TSAC1
//Esercizi iterativi

/*Esercizio 1
	Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
	negativo.
	Complessita': O(3 + 3n)
*/
function sumTillNegative(array){
	var sum = 0;
	for (var i = 0; array[i] > 0 && i < array.length; i++) sum += array[i];
	return sum;
}

/*Esercizio 2
	Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
	Complessita': O(4 + 4n)
*/
function oddSum(n){
	var sum = 0, foo = 1;
	for (var i = 0; i < n; i++, foo += 2) sum += foo;
	return sum;
}

/*Esercizio 3
	Dato un array di 10 elementi, calcolarne la media
	Complessita': O(4 + 3n)
*/
function average(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++) sum += array[i];
	return sum / array.length;
}

/*Esercizio 4
	Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
	compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
	calcolare la somma nell’intervallo [b,a]
	Esempio:
	sumInterval(3, 5) => 12
	sumInterval(5, 3) => 12
	Complessita': O(4 + (a-b)n)
*/
function sumInterval(a, b){
	var sum = 0;
	if (b < a) for (var i = b; i<= a; i++) sum += i;
	else for (var i = a; i <= b; i++) sum += i;
	return sum;
}

/*Esercizio 5
	Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
	operatore somma.
	Esempio:
	mult(2, 3) => 6
	Complessita': O(4 + 3n)
*/
function mult(a, b){
	if (b == 0) return 0;
	var mul = a;
	for (var i = 1; i < b; i++) mul += a;
	return mul;
}

/*Esercizio 6
	Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
	l’utilizzo dei soli operatori somma e sottrazione.
	Esempio:
	div(5, 3) => 1 resto 2
	Complessita': O(3 + 3n)
*/
function div(a, b){
	var di = a;
	var foo = 0;
	while (di >= b){
		di -= b;
		foo ++;
	}
	return foo + " resto " + di;
}

/*Esercizio 7
	Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
	operatori somma, sottrazione e della funzione mult.
	Esempio:
	pow(2, 3) => 8
	Complessita': O(5 + 3n)
*/
function pow(a, b){
	if (b == 0) return 1;
	if (b == 1) return a;
	var value = a;
	for (var i = 1; i < b; i++) value = mult(value, a);
	return value;
}

/*Esercizio 8
	Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
	oggetti in un array bidimensionale n x n
	Complessita': O(2^n)....?
*/
function toBidimensional(array){
	var n = Math.sqrt(array.length);
	var output = [[]];
	var foo = 0;
	for (var y = 0; y < n; y++){
		output[y] = [];
		for (var x = 0; x < n; x++){
			output[y][x] = array[foo];
			foo ++;
		}
	}
	return output;
}

/*Esercizio 9
	Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
	elementi.
	Esempio:
	Input: A = {2, 5, 8}
	Output A= {8, 5, 2}
	Complessita': O(3 + 3n)
*/
function reverse(array){
	var output = [];
	for (var i = 0; i < array.length; i++) output[i] = array[array.length - 1 - i];
	return output;
}

/*Esercizio 10
	Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
	contenenti a.
	Esempio:
	replicate(3, 4) => A= {3, 3, 3, 3}
	Complessita': O(3 + 3n)
*/
function replicate(a, n){
	var output = [];
	for (var i = 0; i < n; i++) output[i] = a;
	return output;
}

/*Esercizio 11
	Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
	dispari precedano nello stesso ordine tutti gli elementi pari.
	Esempio
	Input: A = {2, 5, 1, 8}
	Output: A = {5, 1, 2, 8}
	Complessita': O(6 + 10n)
*/
function oddThenEven(array){
	var output = [];
	var index = 0;
	for (var i = 0; i < array.length; i++){
		if (array[i] % 2 != 0){
			output[index] = array[i];
			index ++;
		}
	}
	for (i = 0; i < array.length; i++){
		if (array[i] % 2 == 0){
			output[index] = array[i];
			index ++;
		}
	}
	return output;
}