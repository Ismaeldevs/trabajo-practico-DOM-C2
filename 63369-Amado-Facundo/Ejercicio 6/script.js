const tarjeta =document.getElementById("tarjeta");
const btnToggle=document.getElementById("btnToggle");

btnToggle.addEventListener("click",function(){
    tarjeta.classList.toggle("oculto")

    if(tarjeta.classList.contains("oculto")){
        btnToggle.textContent="Mostar"
        btnToggle.setAttribute("false")
    }else{
        btnToggle.textContent="Ocultar"
        btnToggle.setAttribute("true")
    }
})