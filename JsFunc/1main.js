//возвращение функции
function myTank(res1, res2, callback) {
    alert('Начинаем проверку.\n\nПараметры: ' + res1 + ', ' + res2);
  
    if (callback && typeof(callback) === "function") {
        callback();
    }
}
myTank('проверка', 'продолжаеться', function() { 
     alert ('Проверка закончена.');
});

var Nat=function(){
	alert("Privet");
	Nat=function(){
		alert("Poka");
		Nat();// privet
		Nat();// poka
	}
}


//немедленно вызываемые функции
(function sum(a, b) {
    alert(a + b); // 5
})(2, 3);
