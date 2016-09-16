window.addEventListener("load", function() {
    var cri = document.getElementById("cri");
    var contador = 1;
	cri.addEventListener("click", function(){
		if(contador == 1){
			document.getElementById("c1").style.border = "5px solid red";
			document.getElementById("color").placeholder = "Azul";
			document.getElementById("c2").style.border = "0px";
			document.getElementById("c3").style.border = "0px";
		}
		else if(contador == 2){
			document.getElementById("c1").style.border = "0px";
			document.getElementById("color").placeholder = "Rojo";
			document.getElementById("c2").style.border = "4px solid green";
			document.getElementById("c3").style.border = "0px";
		}
		else if(contador == 3){
			document.getElementById("c1").style.border = "0px";
			document.getElementById("color").placeholder = "Verde";
			document.getElementById("c2").style.border = "0px";
			document.getElementById("c3").style.border = "4px solid blue";
			contador = 0;
		}
		contador++;
    });
    var superCri = document.getElementById("superCri");
    superCri.addEventListener("click", function() {
        var color = document.getElementById("color").value;
        if(color == "azul"){
            document.getElementById("c1").style.border = "5px solid red";
            document.getElementById("c2").style.border = "0px";
            document.getElementById("c3").style.border = "0px";
        }else if(color == "rojo"){
            document.getElementById("c1").style.border = "0px";
            document.getElementById("c2").style.border = "5px solid green";
            document.getElementById("c3").style.border = "0px";
        }else if(color == "verde"){
            document.getElementById("c1").style.border = "0px";
            document.getElementById("c2").style.border = "0px";
            document.getElementById("c3").style.border = "5px solid blue";
        }
    });
});