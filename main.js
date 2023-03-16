// Importamos o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';

// Criamos as constantes da nossa imagem, do nome e do botão
const image = document.querySelector('#image');
const name = document.querySelector('#name');
const sortBtn = document.querySelector('#sortBtn');

// Aqui, você insere o token de acesso obtido no site da API
const ACCESS_TOKEN = 2355533161292716;

// Essa é a URL base da API. Note que, ao final, ela insere o
// token de acesso. Dessa forma, não precisaremos alterar a URL
// caso o token mude
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

// A API possui 731 heroínas e heróis cadastrados. Porém, para
// simularmos um erro na API por não encontrar o id informado,
// vamos colocar que a quantidade máxima de ids é superior ao
// correto.
const MAX_HEROES = 1000;

// Função simples para retornar um valor inteiro aleatório
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

// Adicionamos o eventListener 'click' no nosso botão
sortBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  // Faremos o fetch utilizando nossa URL e o id gerado
  // pela função
  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      // Uma vez extraído, vamos recuperar as informações
      // que precisamos. No caso, a imagem e o nome
      image.src = data.image.url;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      // Aqui, estamos usando a nossa biblioteca, mas
      // você pode usar a função window.alert() também
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
