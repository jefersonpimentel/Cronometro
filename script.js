let tempo = 0;
let intervalo;
let rodando = false;

const display = document.getElementById("tempo");

const btnIniciar = document.getElementById("iniciar");
const btnPausar = document.getElementById("pausar");
const btnResetar = document.getElementById("resetar");

function formatarTempo(segundosTotais) {
  const horas = Math.floor(segundosTotais / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  const h = String(horas).padStart(2, "0");
  const m = String(minutos).padStart(2, "0");
  const s = String(segundos).padStart(2, "0");

  return `${h}:${m}:${s}`;
}

btnIniciar.addEventListener("click", () => {
  if (!rodando) {
    intervalo = setInterval(() => {
      tempo++;
      display.classList.add("animar");

      setTimeout(() => {
        display.classList.remove("animar");
      }, 100);
      display.textContent = formatarTempo(tempo);
    }, 1000);

    rodando = true;
  }
});

btnPausar.addEventListener("click", () => {
  clearInterval(intervalo);
  rodando = false;
});

btnResetar.addEventListener("click", () => {
  clearInterval(intervalo);
  tempo = 0;
  display.textContent = formatarTempo(tempo);
  rodando = false;
});
