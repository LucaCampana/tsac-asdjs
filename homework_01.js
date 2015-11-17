/*Esercizio 1
	Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
	negativo.
	Spazio:	O(1)
	Tempo:	O(n)
*/
function sumTillNegative(array){
	var sum = 0;
	for (var i = 0; array[i] > 0 && i < array.length; i++) sum += array[i];
	return sum;
}

/*Esercizio 2
	Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
	Spazio: O(1)
	Tempo: O(n)
*/
function oddSum(n){
	var sum = 0;
	for (var i = 0; i < n; i++) sum += 1 + 2 * i;
	return sum;
}

/*Esercizio 3
	Dato un array di 10 elementi, calcolarne la media
	Spazio: O(1)
	Tempo: O(n)
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
	Spazio: O(1)
	Tempo: O(n)
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
	Spazio: O(1)
	Tempo: O(n)
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
	Spazio: O(1)
	Tempo: O(n)
*/
function div(a, b){
	var di = a;
	var foo = 0;
	while (di >= b){
		di -= b;
		foo ++;
	}
	return [foo, di];//foo + " resto " + di;
}

/*Esercizio 7
	Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
	operatori somma, sottrazione e della funzione mult.
	Esempio:
	pow(2, 3) => 8
	Spazio: O(1)
	Tempo: O(n)
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
	Spazio: O(1)
	Tempo: O(n)
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
	Spazio: O(1)
	Tempo: O(n)
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
	Spazio: O(1)
	Tempo: O(n)
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

/*Esercizio 1
	Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
	negativo.
	Spazio: O(n)
	Tempo: O(n)
*/
function reSumTillNegative(array){
	return rSumTillNegative(array, 0 , 0);
}

function rSumTillNegative(array, index, sum){
	if (index == array.length || array[index] < 0) return sum;
	return rSumTillNegative(array, index + 1, sum + array[index]);
}

/*Esercizio 2
	Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
	Spazio: O(n)
	Tempo: O(n)
*/
function reOddSum(n){
	return rOddSum(n, 1, 1, 0);
}

function rOddSum(n, index, current, sum){			
	if (index > n) return sum;
	return rOddSum(n, index + 1, current + 2, sum + current);
}

/*Esercizio 3
	Dato un array di 10 elementi, calcolarne la media
	Complessita': O(1 + 3n)
	Spazio: O(n)
	Tempo: O(n)
*/
function reAverage(array){
	return rAverage(array, 0, 0);
}

function rAverage(array, index, sum){
	if (index == array.length) return sum / array.length;
	return rAverage(array, index + 1, sum + array[index]);
}

/*Esercizio 4
	Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
	compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
	calcolare la somma nell’intervallo [b,a]
	Esempio:
	sumInterval(3, 5) => 12
	sumInterval(5, 3) => 12
	Spazio: O(n)
	Tempo: O(n)
*/
function reSumInterval(a, b){
	return b < a ? rSumInterval(a, b, 0) : rSumInterval(b, a, 0);
}

function rSumInterval(b, index, sum){
	sum += index;
	if (index == b) return sum;
	return rSumInterval(b, index + 1, sum);
}

/*Esercizio 5
	Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
	operatore somma.
	Esempio:
	mult(2, 3) => 6
	Spazio: O(n)
	Tempo: O(n)
*/
function reMult(a, b){
	return b == 0 ? 0 : rMult(a, b, 0, 0);
}

function rMult(a, b, times, sum){
	if (times == b) return sum;
	return rMult(a, b, times + 1, sum + a);
}

/*Esercizio 6
	Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
	l’utilizzo dei soli operatori somma e sottrazione.
	Esempio:
	div(5, 3) => 1 resto 2
	Spazio: O(n)
	Tempo: O(n)
*/
function reDiv(a, b){
	return rDiv(b, 0, a);
}

function rDiv(b, times, sub){
	if (sub < b) return [times, sub];//times + " resto " + sub;
	return rDiv(b, times + 1, sub - b);
}

/*Esercizio 7
	Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
	operatori somma, sottrazione e della funzione mult.
	Esempio:
	pow(2, 3) => 8
	Spazio: O(n)
	Tempo: O(n)
*/
function rePow(a, b){
	return b == 0 ? 1 : rPow(a, b, 1, a);
}

function rPow(a, b, times, mul){
	if (times == b) return mul;
	mul = mult(mul, a);
	return rPow(a, b, times + 1, mul);
}

/*Esercizio 8
	Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
	oggetti in un array bidimensionale n x n
	Spazio: O(n^2)
	Tempo: O(n^2)
*/

function reToBidimensional(array){
	return rToBidimensional(array, [[]], 0, 0, Math.sqrt(array.length), 0);
}

function rToBidimensional(array, bArray, x, y, n, index){
	if (y == 0) bArray[x] = [];
	bArray[x][y] = array[index];
	if ((x + 1) == n && (y + 1) == n) return bArray;
	if (y + 1 == n){
		x ++;
		y = 0;
	}
	else y ++;
	return rToBidimensional(array, bArray, x, y, n, index + 1);
}

/*Esercizio 9
	Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
	elementi.
	Esempio:
	Input: A = {2, 5, 8}
	Output A= {8, 5, 2}
	Spazio: O(n)
	Tempo: O(n)
*/
function reReverse(array){
	return rReverse(array, 0, []);
}

function rReverse(array, index, newArray){
	if (index == array.length) return newArray;
	newArray[index] = array[array.length - 1 - index];
	return rReverse(array, index + 1, newArray);
}

/*Esercizio 10
	Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
	contenenti a.
	Esempio:
	replicate(3, 4) => A= {3, 3, 3, 3}
	Complessita': O(1 + 4n)
	Spazio: O(n)
	Tempo: O(n)
*/
function reReplicate(a, n){
	return rReplicate(a, n, [], 0);
}

function rReplicate(a, n, array, index){
	if (index == n) return array;
	array[index] = a;
	return rReplicate(a, n, array, index + 1);
}

/*Esercizio 11
	Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
	dispari precedano nello stesso ordine tutti gli elementi pari.
	Esempio
	Input: A = {2, 5, 1, 8}
	Output: A = {5, 1, 2, 8}
	Spazio: O(n)
	Tempo: O(n)
*/
function reOddThenEven(array){
	return rOddThenEven(array, 0, false, [], 0);
}

function rOddThenEven(array, index, even, newArray, count){
	if (index == array.length){
		if (!even) {
			even = true;
			return rOddThenEven(array, 0, even, newArray, count);
		}
		else return newArray;
	}
	if (even ? array[index] % 2 == 0 : array[index] % 2 != 0){
		newArray[count] = array[index];
		count ++;
	}
	return rOddThenEven(array, index + 1, even, newArray, count);
}

function ex_1_I(array){
	return sumTillNegative(array);
}

function ex_2_I(array){
	return oddSum(n);
}

function ex_3_I(array){
	return average(array);
}

function ex_4_I(a, b){
	return sumInterval(a, b);
}

function ex_5_I(a, b){
	return mult(a, b);
}

function ex_6_I(a, b){
	return div(a, b);
}

function ex_7_I(a, b){
	return pow(a, b);
}

function ex_8_I(array){
	return toBidimensiona(array);
}

function ex_9_I(array){
	return reverse(array);
}

function ex_10_I(a, n){
	return replicate(a, n);
}

function ex_11_I(array){
	return oddThenEven(array);
}

function ex_1_R(myarray){
	return reSumTillNegative(myarray);
}

function ex_2_R(n){
	return reOddSum(n);
}

function ex_3_R(array){
	return reAverage(array);
}

function ex_4_R(a, b){
	return reSumInterval(a, b);
}

function ex_5_R(a, b){
	return reMult(a, b);
}

function ex_6_R(a, b){
	return reDiv(a, b);
}

function ex_7_R(a, b){
	return rePow(a, b);
}

function ex_8_R(array){
	return reToBidimensional(array);
}

function ex_9_R(array){
	return reReverse(array);
}

function ex_10_R(a, n){
	return reReplicate(a, n);
}

function ex_11_R(array){
	return reOddThenEven(array);
}