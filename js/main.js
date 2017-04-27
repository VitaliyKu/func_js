function showMessage(){
	a = prompt('Задайте число');
	b = prompt('Задайте число');
	as:
		for (i = a; i <= b; i++) {
			for (j = 2; j < i; j++){
				if (i % j == 0) continue as; 
			}
		alert(i);
}
}
showMessage();