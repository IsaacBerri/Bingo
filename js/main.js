const containerNumber = document.querySelector(".containerNumber");
const number = document.querySelector(".number");
const table = document.querySelector(".marks");
const player = document.querySelector(".numerosPlayer");
const cpu = document.querySelector(".numerosCpu");
const parrafos = document.getElementsByClassName("numeroDelCarton");

const cartonPlayer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const cartonCpu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const numerosDeLaTabla = [];

number.addEventListener("click", () => agregarNumero(generador()));

function generador() {
  let num = Math.floor(Math.random() * (91 - 1) + 1);
  while (numerosDeLaTabla.includes(num)) {
    num = Math.floor(Math.random() * (91 - 1) + 1);
  }
  numerosDeLaTabla.push(num);
  return num;
}

function numerosDeCartones(Array, carton) {
  for (let i = 0; i < Array.length; i++) {
    let num = Math.floor(Math.random() * (91 - 1) + 1);
    while (Array.includes(num)) {
      num = Math.floor(Math.random() * (91 - 1) + 1);
    }
    Array[i] = num;
  }
  Array.map((numero) => {
    const numerosDelCarton = document.createElement("p");
    numerosDelCarton.classList.add("numeroDelCarton");
    numerosDelCarton.innerHTML = `
   ${numero}`;
    carton.append(numerosDelCarton);
  });
}
function agregarNumero(numeroGenenado) {
  const ultimoNumero = document.createElement("p");
  ultimoNumero.classList.add("numberGenerate");
  ultimoNumero.innerHTML = `
  ${numeroGenenado}`;
  table.append(ultimoNumero);

  tacharNumeros(numeroGenenado);
  ganador(cartonPlayer, numeroGenenado, "Player");
  ganador(cartonCpu, numeroGenenado, "Cpu");
  table.scrollTop = table.scrollHeight;
}

function tacharNumeros(numeroExistente) {
  const arrayParrafos = Array.from(parrafos);

  arrayParrafos.forEach((element) => {
    if (numeroExistente == element.innerHTML) {
      element.classList.remove("numeroDelCarton");
      element.classList.add("tachado");
    }
  });
}

function ganador(array, numeroGenenado, ganador) {
  const arrayGanador = array.indexOf(numeroGenenado);
  if (arrayGanador > -1) {
    array.splice(arrayGanador, 1);
  }
  if (array.length === 0) {
    containerNumber.removeChild(number);
    containerNumber.innerHTML = `
    <p>El ganador es ${ganador}</p>`;
    if (ganador == "Player") {
      var duration = 10 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
    } else {
      confetti();
    }
  }
}

numerosDeCartones(cartonPlayer, player);
numerosDeCartones(cartonCpu, cpu);
