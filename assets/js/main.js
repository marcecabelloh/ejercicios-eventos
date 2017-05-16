//crear una funcion para que contenga un alert e informe cuando la pagina esté cargada
function cargando(){
     alert("La página esta cargada");
}
window.onload = cargando;

//addEventListener para evento click que llame a una función 
//y que al pinchar diga hola mundo
function demo(){
	var pulsar = document.getElementById("demo");
	pulsar.addEventListener("click", function(){
		alert("¡Hola Mundo!");
	})
}

//ocupando mouseout y mouseover informar cuando se este sobre o fuera del elemento
function mouse(){
	var x = document.querySelector("input");
	x.addEventListener("mouseout", function(){
		alert("Estás sobre mí");
	})

	x.addEventListener("mouseover",function(){
		alert("No estás sobre mí");
	})
}


//llamo a mis funciones
demo();
mouse();
load();
