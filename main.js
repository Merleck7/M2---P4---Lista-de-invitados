const listaInvitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo","Erika", "Fernando", "Felicia"];
function encontrarPareja (arr){
    let inicio = 0;
    let siguiente = 1;
    const nueva_lista = [];
    while (siguiente < arr.length) {
        if (arr [inicio][0] === arr [siguiente][0]) {
            nueva_lista.push([arr[inicio], arr[siguiente]]);
        } 
            inicio++;
            siguiente++;
    }
    return nueva_lista.length > 0 ? nueva_lista : "No hay parejas";
}
console.log (encontrarPareja(listaInvitados));