document.getElementById('searchbtn').addEventListener('click', find_pokemon);

function find_pokemon() {

    const xhr = new XMLHttpRequest(),
          pokemonName = document.getElementById('nameinput').value,
          endPoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

          if (pokemonName == '') {
              document.getElementById('nameinput').placeholder = 'Please Enter Something';
          } else {

            xhr.open('GET', endPoint, true);

            xhr.onload = () => {

                if (xhr.responseText == 'Not Found') {
                    document.getElementById('nameinput').value = '';
                    document.getElementById('nameinput').placeholder = 'Pokemon Not Found';


                } else {

                   let pokemonInfo = JSON.parse(xhr.responseText);

                   console.log(endPoint);

                   document.getElementById('name').innerHTML += `<h1>${pokemonInfo.name.substring(0,1).toUpperCase() + pokemonInfo.name.substring(1,pokemonInfo.name.length)}</h1>`;
                   document.getElementById('idNum').innerHTML += `<h1>${pokemonInfo.id}</h1>`;
                   document.getElementById('height').innerHTML += `<h1>${pokemonInfo.height}</h1>`;
                   document.getElementById('weight').innerHTML += `<h1>${pokemonInfo.weight}</h1>`;

                        console.log(pokemonInfo.sprites.front_default);

                //    document.getElementById(img1).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`;
                   document.getElementById(img2).src = '/img.jpg';

                   
                   
                   

                }

            }
            xhr.send();

          }

    

    
    

    document.getElementById('img1').src = "";
    document.getElementById('img2').src = "";
    
}

