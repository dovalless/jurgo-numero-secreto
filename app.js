// no es recomendable que una variable externa tenga el mismo nombre que una variable que este dentro de una funcion para no generar confucion pero como podemos ver es totalmente funcional ya que no estan unidas. 

let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumeroSorteados = [];

// Esta es una forma de escribir texto html en javascript.
/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';
*/

// esta es una forma mas eficiente de escribir texto en javascript.
function asignarTextoElemento (elemento,texto) {
    let elementoHtml =  document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    
}


function verificaIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // el usuario acerto

    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${ (intentos == 1) ? 'vez': 'veces'} `);
     document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        // el suuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return; 
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() { 
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;


    console.log (numeroGenerado);
    console.log (listaNumeroSorteados);
    // si ya sorteamos todos los numeros 

    if (listaNumeroSorteados.length == numeroMaximo) {
    
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles ")

    }else{

    
        // si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 

}    

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numero
    // generar numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    // desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales();
