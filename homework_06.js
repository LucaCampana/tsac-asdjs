//Campana Luca TSAC

function merge(array1, array2){
	var output = [];
	var index = index1 = index2 = 0;
	while (output.length < array1.length + array2.length){
		if (index1 < array1.length && array1[index1] < array2[index2]){
			output[index] = array1[index1];
			index1 ++;
		}
		else {
			if (index2 < array2.length){
				output[index] = array2[index2];
				index2 ++;
			}
			else {
				output[index] = array1[index1];
				index1 ++;
			}
		}
		index ++;
	}
	return output;
}

/*function merge(array1, array2){
	return array1.concat(array2).sort();
}*/