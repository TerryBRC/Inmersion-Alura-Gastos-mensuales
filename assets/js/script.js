
let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];

//Esta funcion se invoca al momento de que el usuario le da click al boton
//agregar gasto
    function clickBoton(){
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    let descripcionGasto = document.getElementById("descripcionGasto").value;
    if(nombreGasto =='' || valorGasto ==''||descripcionGasto==''){
        Swal.fire({
            title: "Información del Sistema",
            text:'Campos Requeridos',
            icon: 'warning',
            confirmButtonColor:'#3085d6',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGastos.push(descripcionGasto);
    if(Number(valorGasto) >= 150){
        alert("¡OJO! Este gasto es mayor o igual a $150");
    }
    actualizarListaGastos();
}
function actualizarListaGastos(){
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto =Number(listaValoresGastos[posicion]);
        const descripcionGasto= listaDescripcionGastos[posicion];
        htmlLista +=`<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${descripcionGasto}
                        <div>
                        <button id="botonEliminar" onclick="eliminarGasto(${posicion});">Eliminar</button>
                        <button id="botonActualizar" onclick="actualizarGasto(${posicion});">Actualizar</button>
                        </div>
                    </li>`;
        //Calcularmos el total de gastos
        totalGastos +=Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}
function limpiar(){
    document.getElementById("nombreGasto").value='';
    document.getElementById("valorGasto").value = '';
    document.getElementById("descripcionGasto").value='';

}
function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    actualizarListaGastos();
}