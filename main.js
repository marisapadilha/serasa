var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var btn_queroajuda = document.getElementById("quero_ajuda");
var btn_continuar = document.getElementById("btn_continuar");

btn_queroajuda.addEventListener("click", function () {
  form1.style = "display: grid";
});

form1.onsubmit = function (e) {
  e.preventDefault();
  form2.style = "display: block";
};
