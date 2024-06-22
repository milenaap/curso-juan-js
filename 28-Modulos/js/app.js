import nuevaFuncion, {ahorro, nombreCliente, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import { Empresa } from './empresa.js';

nuevaFuncion();

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));


tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());

// Importar empresa

const empresa = new Empresa('Codigo con Juan', 100, 'Aprendiendo en Línea');
console.log(empresa.mostrarInformacion());






