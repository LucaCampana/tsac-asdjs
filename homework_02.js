//Campana Luca TSAC

/*Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo.
*/
function sumTillNegative(array){
    var sum = 0;
    array.every(x => {
        if (x >= 0) sum += x;
        return x >= 0;
    });
    return sum;
}

/*Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function oddSum(n){
	var sum = 0;
	for (var i = 0; i < n; i++) sum += 1 + 2 * i;
	return sum;
}

/*Esercizio 3
	Dato un array di 10 elementi, calcolarne la media
*/
function average(array){
	return array.reduce((x, y) => x + y) / array.length;
}

/*Esercizio 4
	Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
	compresi all' interno dell' intervallo, estremi inclusi. Nel caso che b fosse minore di a,
	calcolare la somma nell' intervallo [b,a]
	Esempio:
	sumInterval(3, 5) => 12
	sumInterval(5, 3) => 12
*/
function sumInterval(a, b){
	var sum = 0;
	if (b < a) return sumInterval(b, a);
	for (var i = a; i <= b; i++) sum += i;
	return sum;
}

/*Esercizio 5
	Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l' utilizzo del solo
	operatore somma.
	Esempio:
	mult(2, 3) => 6
*/
function mult(a, b){
	if (b == 0) return 0;
	var mul = a;
	for (var i = 1; i < b; i++) mul += a;
	return mul;
}

/*Esercizio 6
	Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
	l' utilizzo dei soli operatori somma e sottrazione.
	Esempio:
	div(5, 3) => 1 resto 2
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
	Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l' utilizzo dei soli
	operatori somma, sottrazione e della funzione mult.
	Esempio:
	pow(2, 3) => 8
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
	Spazio: O(1)
	Tempo: O(n^2)
*/
function toBidimensional(array){
    var output = [[]];
	var root = Math.sqrt(array.length)
	for (var i = 0; i < root; i++) {
		output[i] = [];
		array.slice(i * root, (i * root) + root).forEach(x => output[i].push(x));
	}
	return output;
}

/*Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire lâ€™ordine degli
elementi.
Esempio:
Input: A = {2, 5, 8}
Output A= {8, 5, 2}
*/
function reverse(array){
    return array.reverse();
}

/*Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
Esempio:
replicate(3, 4) => A= {3, 3, 3, 3}
*/
function replicate(a, b){
    var array = [];
    for (var i = 0; i < b; i++) array[i] = a;
    return array;
}

/*Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
Esempio
Input: A = {2, 5, 1, 8}
Output: A = {5, 1, 2, 8}
*/
function oddThenEven(array){
    return array.filter(x => x % 2 != 0).concat(array.filter(x => x % 2 == 0));
}

function ex_1_F(array){
	return sumTillNegative(array);
}

function ex_2_F(n){
	return oddSum(n);
}

function ex_3_F(array){
	return average(array);
}

function ex_4_F(a, b){
	return sumInterval(a, b);
}

function ex_5_F(a, b){
	return mult(a, b);
}

function ex_6_F(a, b){
	return div(a, b);
}

function ex_7_F(a, b){
	return pow(a, b);
}

function ex_8_F(array){
	return toBidimensional(array);
}

function ex_9_F(array){
	return reverse(array);
}

function ex_10_F(a, b){
	return replicate(a, b);
}

function ex_11_F(array){
	return oddThenEven(array);
}
