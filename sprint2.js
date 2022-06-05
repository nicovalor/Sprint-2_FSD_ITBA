const personas = [];
const pagos = [];
const listado = document.getElementById("list-group");
const resultado = document.getElementById("total");
const nombre = document.getElementById("persona");
const pago = document.getElementById("pago");

function mostrarEnPantalla() {
  agregarNuevoPago();
  mostrarNuevoPago();
  promedioDeCadaPersona();
}

function agregarNuevoPago() {
  personas.push(nombre.value);
  pagos.push(pago.value);
}

function mostrarNuevoPago() {
  let li = document.createElement("li");
  let text = document.createTextNode(`${nombre.value} pagó: $${pago.value}`);
  li.classList.add("list-group-item");
  li.appendChild(text);
  listado.appendChild(li);
}

function promedioDeCadaPersona() {
  let totalPagos = 0;
  for (let unPago of pagos) {
    totalPagos += parseInt(unPago);
    totalPagos = totalPagos;
  }
  let promedioDePago = totalPagos / personas.length;

  resultado.innerText = `Total: ${totalPagos}. Cada uno debe: $${promedioDePago}`;
}
