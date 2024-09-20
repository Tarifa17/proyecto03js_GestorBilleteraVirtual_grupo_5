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
    document.getElementById('usuario').value = "";//borra los valores ingresados en el usuario
    document.getElementById('billetera').value = "";//borra los valores ingresados en  billetera
    document.getElementById('transaccion').value = "";//borra los valores ingresados en  transaccion
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
function mostarMayor() {
    const maxTransacciones = {};
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

    for (let i = 0; i < listaUsuarios.length; i++) {
        const usuario = listaUsuarios[i];
        const transaccion = listaTransacciones[i];

        if (!maxTransacciones[usuario] || transaccion > maxTransacciones[usuario]) {
            maxTransacciones[usuario] = transaccion;
        }
    }

    for (const usuario in maxTransacciones) {
        const resultado = document.createElement("p");
        resultado.textContent = `${usuario} tiene la transacción más alta: ${maxTransacciones[usuario]}`;
        resultadosDiv.appendChild(resultado);
    }
}




