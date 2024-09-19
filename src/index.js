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
    mostarLista();
}

function mostrarDatos(){
    //const lista = [...listaUsuarios,...listaBilleteras,...listaTransacciones];
    //let modeloTabla = '<li></li>';
    var lista=document.getElementById("lista"); 
    //modeloTabla = modeloTabla + '<tr> <th>Nombre Usuario</th> <th>Billetera</th> <th>N° Transacciones</th> </tr>';
    for (let i = 0; i<=listaUsuarios.length; i++) {
        //modeloTabla = modeloTabla + '<tr>';
       // modeloTabla = modeloTabla + '<td>' + listaUsuarios[i] + '</td';
        //modeloTabla = modeloTabla + '<td>' + listaBilleteras[i] + '</td';
        //modeloTabla = modeloTabla + '</tr';
        let linew= document.createElement("table");    
        let contenido = document.createTextNode(listaUsuarios[i]+' '+listaBilleteras[i]+" "+listaTransacciones[i]);
        lista.appendChild(linew);
        linew.appendChild(contenido);
    };

    //modeloTabla = modeloTabla + '</table';
    //document.getElementById('lista').innerHTML=modeloTabla;
}

