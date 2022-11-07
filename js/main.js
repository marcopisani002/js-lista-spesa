const listaSpesa = [ "LATTE" , "  PASTA", " PANE", "FARINA" ];
const listaSpesaEl = document.getElementById("print-spesa");
let i = 0;

while ( i < listaSpesa.length ) {
  console.log( "ripetizione ciclo", i );
  console.log(listaSpesa)
  listaSpesaEl.innerHTML = ` ${listaSpesa}`;
  i++;}