const number = document.querySelector(".number")
const table = document.querySelector(".marks")
const player = document.querySelector(".numerosPlayer")
const cpu = document.querySelector(".numerosCpu")


const cartonPlayer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const cartonCpu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]



number.addEventListener('click', () => agregarNumero(generador()));

function generador() {
  const num = Math.floor(Math.random()*90)
  return num
}

function agregarNumero(numeroGenenado) {
  const ultimoNumero = document.createElement("div")
  ultimoNumero.classList.add("numberGenerate")
  ultimoNumero.innerHTML = `
  ${numeroGenenado}`
  table.append(ultimoNumero)

  tacharNumeros(numeroGenenado)
}

function numerosDeCartones(Array, carton) {

  for (let i = 0; i < Array.length; i++) {
    const num = Math.floor(Math.random()*90)
    Array[i] = num
  }

  Array.map((numero) => {
   const numerosDelCarton = document.createElement("p")
   numerosDelCarton.classList.add("numeroDelCarton")
   numerosDelCarton.innerHTML = `
   ${numero}`
   carton.append(numerosDelCarton)
  })
}

function tacharNumeros(numeroExistente) {
  cartonPlayer.map((numero) => {
    if (numeroExistente === numero) {
      console.log(`El numero ${numero} ya esta en el carton`);
    }
  })
}

numerosDeCartones(cartonPlayer, player)
numerosDeCartones(cartonCpu, cpu)