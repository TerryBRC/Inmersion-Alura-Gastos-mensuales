let listaNombresGastos = [];
let listaValoresGastos = [];

//Esta funcion se invoca al momento de que el usuario le da click al boton
//agregar gasto
function clickBoton(){
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert("Click del Usuario");
    actualizarListaGastos();
}
function actualizarListaGastos(){
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos")
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto =Number(listaValoresGastos[posicion]);
        htmlLista +=`<li>${elemento}- USD ${valorGasto.toFixed(2)}
                        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
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

}
function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}