// https://sweetalert2.github.io/
// ES6 Modules
import Swal from 'sweetalert2';

const image = document.getElementById('image');
const name = document.getElementById('name');
const sortBtn = document.getElementById('sortBtn');
const apiURL = 'https://superheroapi.com/api.php/2355533161292716';
const maxHeroes = 1000;
const generateId = () => Math.floor(Math.random() * maxHeroes);

// o formato da url: https://superheroapi.com/api/access-token/character-id
// a api possui 731 superheroes, porém colocamos 1000 como número maximo para simular erros também

sortBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`${apiURL}/${generateId()}`)
    .then((response) => response.json())
    .then((data) => {
    // console.log(data) -> objeto enorme com as keys: id, name, powerstats, biography, image, etc;
      image.src = data.image.url;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      icon: 'error',
      title: 'Hero not found',
      text: error.message,
      confirmButtonText: 'Cool',
    }));
});
