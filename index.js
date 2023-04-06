const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', function() {
  const valorAleatorio = Math.floor(Math.random() * 6) + 1;
  resultado.innerText = valorAleatorio;
});