let altura = '';
let cabello = '';
let personalidad = '';
let piel = '';
let trabaja = '';
let sexo = '';
let usaLentes = '';
let recidencia = '';

function seleccionarAltura(opcion) {
  altura = opcion;
}

function seleccionarCabello(opcion) {
  cabello = opcion;
}

function seleccionarPersonalidad(opcion) {
  personalidad = opcion;
}

function seleccionarPiel(opcion) {
  piel = opcion;
}

function seleccionarTrabajo(opcion) {
  trabaja = opcion;
}

function seleccionarSexo(opcion) {
  sexo = opcion;
}

function seleccionarusaLentes(opcion) {
  usaLentes = opcion;
}

function seleccionarRecidencia(opcion) {
  recidencia = opcion;
}

function adivinar() {
  if (altura && cabello && personalidad && piel && trabaja && sexo && usaLentes && recidencia) {
    if (altura === 'alto' && cabello === 'rizado' && personalidad === 'introvertido' && piel === 'blanca' && trabaja === 'no' && usaLentes === 'no' && recidencia === 'Ejido') {
      alert("¡Adivinaste! El personaje es Alfredo.");
    } else if (altura === 'promedio' && cabello === 'liso' && personalidad === 'extrovertido' && piel === 'blanca' && trabaja === 'no' && usaLentes === 'si' && recidencia === 'San Pedro') {
      alert("¡Adivinaste! El personaje es Gerardo.");
    } else if (altura === 'promedio' && cabello === 'liso' && personalidad === 'introvertido' && piel === 'aperlado' && trabaja === 'si' && usaLentes === 'no' && recidencia === 'San Pedro') {
      alert("¡Adivinaste! El personaje es Luis.");
    } else if (altura === 'bajo' && cabello === 'ondulado' && personalidad === 'introvertido' && piel === 'apaerlado' && trabaja === 'si' && usaLentes === 'no' && recidencia === 'San Pedro') {
      alert("¡Adivinaste! El personaje es Gonzalo.");
    } else if (altura === 'alto' && cabello === 'ondulado' && personalidad === 'extrovertido' && piel === 'blanca' && trabaja === 'si' && usaLentes === 'si' && recidencia === 'San Pedro') {
      alert("¡Adivinaste! El personaje es Ana.");
    } else if (altura === 'alto' && cabello === 'liso' && personalidad === 'introvertido' && piel === 'morena' && trabaja === 'no' && usaLentes === 'no' && recidencia === 'San Pedro') {
      alert("¡Adivinaste! El personaje es Eduardo.");
    } else if (altura === 'promedio' && cabello === 'liso' && personalidad === 'introvertido' && piel === 'blanca' && trabaja === 'no' && usaLentes === 'no' && recidencia === 'Chavez') {
      alert("¡Adivinaste! El personaje es Diego.");
    } else if (altura === 'bajo' && cabello === 'rizado' && personalidad === 'extrovertido' && piel === 'morena' && trabaja === 'no' && usaLentes === 'si' && recidencia === 'San Pedro') {
      alert("¡Adivinaste! El personaje es Zurita.");
    } else if (altura === 'alto' && cabello === 'liso' && personalidad === 'extrovertido' && piel === 'blanca' && trabaja === 'no' && usaLentes === 'no' && recidencia === 'San Pedro') {
      alert("¡Adivinaste! El personaje es Marco.");
    } else if (altura === 'promedio' && cabello === 'rizado' && personalidad === 'introvertido' && piel === 'aperlado' && trabaja === 'no' && usaLentes === 'no' && recidencia === 'San Pedro') {
      alert("¡Adivinaste! El personaje es Alejandra.");
    } else {
      alert("Lo siento, no acertaste. Inténtalo de nuevo.");
    }
  } else {
    alert("Debes responder todas las preguntas antes de adivinar.");
  }
}
