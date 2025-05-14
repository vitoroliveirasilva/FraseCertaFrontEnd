const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const langEl = document.getElementById('language');
const button = document.getElementById('new-quote');

async function carregarFrase() {
  const lang = langEl.value;
  const url = `https://frasecertaapi-680953228709.us-central1.run.app/frase?lang=${lang}`;

  quoteEl.textContent = 'Buscando nova frase...';
  authorEl.textContent = '...';

  try {
    const response = await fetch(url);
    const data = await response.json();

    const frase = data.frase || 'Frase não encontrada.';
    const autor = data.autor ? `~ ${data.autor}` : '~ Desconhecido';

    quoteEl.textContent = '';
    authorEl.textContent = '';

    animarTexto(frase, quoteEl, () => {
      authorEl.textContent = autor;
    });
  } catch (error) {
    quoteEl.textContent = 'Erro ao carregar a frase.';
    authorEl.textContent = '';
    console.error('Erro na requisição:', error);
  }
}

function animarTexto(texto, elemento, callback) {
  let i = 0;
  elemento.textContent = '';

  const intervalo = setInterval(() => {
    if (i < texto.length) {
      elemento.textContent += texto[i];
      i++;
    } else {
      clearInterval(intervalo);
      if (callback) callback();
    }
  }, 20);
}

window.onload = carregarFrase;
button.addEventListener('click', carregarFrase);
