window.addEventListener("load", function() {
    var cri = document.getElementById("cri");
    cri.addEventListener("click", function() {
        document.getElementById("c1").style.border = "5px solid red";
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