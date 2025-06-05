
const listaPerdidos = [];

function reportar (listaPerdidos) {
    let continuar = true;
    let raza = "";
    let barrio = "";
    let nombre = "";

    alert ("Vamos a comenzar a cargar animales perdidos")
    while (continuar) {
        raza = prompt("Ingresa raza: ");
        barrio = prompt ("Ingresa el barrio donde se perdio: ");
        nombre = prompt ("Como se llama la mascota: ");

       let reportado = 
       {raza: raza.toUpperCase,
        barrio: barrio.toUpperCase,
        nombre:nombre}

        listaPerdidos.push(reportado);
        if (prompt ("Quieres reportar uno más? SI/NO") === "SI")
            continuar=true;
        else
            continuar=false;
    }
}

function buscar (listaPerdidos) {
    alert("Busqueda de animales perdidos");
    console.log ("Buscando animales perdidos");
    let raza = prompt ("Ingresa la raza del animal perdido: ");
    let barrio = prompt ("Ingresa en qué barrio se perdio: ");
    const resultado = listaPerdidos.find (perdido => (perdido.raza===raza.toUpperCase && perdido.barrio===barrio.toUpperCase));
    return resultado;
}

console.log("Vamos a reportar animales perdidos");
reportar(listaPerdidos);
let encontrado = buscar(listaPerdidos);
if (encontrado) {
    alert ("El animal encontrado es " + encontrado.nombre);
    console.log("El animal encontrado es " + encontrado.nombre);
}
else {
    alert ("No hay ningun animal con esas caracteristicas")
    console.log("No hay ningun animal con esas caracteristicas");
} 
    

