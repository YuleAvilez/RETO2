
const Adivinanza = document.querySelector(".btnAdivinanza");

const CerrarSesion = document.querySelector(".btnCerrarSesion");
var min = 0;
var max = 10;

var numAleatorio = Math.floor(Math.random()* max - min +1) + min;
var intentos= 0;
var numero;

 Adivinanza.addEventListener("click", function (e) {
    e.preventDefault();

    for(intentos; intentos <100; intentos++){
     numero = parseInt(prompt("ingresa un numero entre el " +min+ " y el " +max));

     if(numero >= min && numero <= max){
            if (numero < numAleatorio){
                alert("!Estas por debajo¡")
            
            } else if (numero>numAleatorio){
              alert("!Te pasaste¡") 
            
        }else if(numero == numAleatorio){
            break;
        }
            
     } else {
        alert ("estas fuera del intervalo")
     }


}

if (numero == numAleatorio){
    Swal.fire({
        icon: 'success',
        title: ("Felicidades! adivinaste el numero en "+(intentos+ 1)+ " intentos"),
        background: "with",
        background : "#b4a7d6",
    }) 
} 
})


CerrarSesion.addEventListener("click", function (e) {
    e.preventDefault();

    if (confirm("¿Estas seguro que quieres cerrar sesión?")){

        swal.fire({
            icon: 'success',
            title: ("Adios señor usuario, vuelva pronto"),
            background : "#b4a7d6",
            timer: 3000,
            timerProgressBar: true,
        })
    }

})

