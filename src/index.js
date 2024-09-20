//declarativas de funciones que se utilizan
/*function guardarDatos(){
    let listaUsuarios = new Array();
    let usuario = document.getElementsByClassName('datoInput'),
    nameValues = [].map.call(usuario, function(dataInput){
        listaUsuarios.push(dataInput.value)
    });
    listaUsuarios.forEach(function(inputValuesData){
        console.log(inputValuesData);
    });
    
}*/
const listaUsuarios = [];
const listaBilleteras = [];
const listaTransacciones = [];
function mostarLista(){
    console.log(listaUsuarios);
    console.log(listaBilleteras);
    console.log(listaTransacciones);
}

function guardarDatos(){
    let usuario = document.getElementById('usuario').value;
    let billetera = document.getElementById('billetera').value;
    let transaccion = parseInt(document.getElementById('transaccion').value);
    listaUsuarios.push(usuario);
    listaBilleteras.push(billetera);
    listaTransacciones.push(transaccion);
    document.getElementById('usuario').value = ""; //borra los valores ingresados en el usuario
    document.getElementById('billetera').value = ""; //borra los valores ingresados en  billetera
    document.getElementById('transaccion').value = ""; //borra los valores ingresados en  transaccion
    mostarLista();
}


function mostrarDatos(){
    var lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpiar el contenido anterior

    for (let i = 0; i < listaUsuarios.length; i++) {
        let item = document.createElement("li");
        item.innerText = listaUsuarios[i] + " - " + listaBilleteras[i] + " - " + listaTransacciones[i];
        lista.appendChild(item);
        
    }
}

