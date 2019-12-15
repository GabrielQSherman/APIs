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

                   console.log(pokemonInfo);

                   document.getElementById('name').innerText = `Name: ${pokemonInfo.name.substring(0,1).toUpperCase() + pokemonInfo.name.substring(1,pokemonInfo.name.length)}`;
                   document.getElementById('idNum').innerText = `Id #: ${pokemonInfo.id}`;
                   document.getElementById('height').innerText = `Height: ${pokemonInfo.height}`;
                   document.getElementById('weight').innerText = `Weight: ${pokemonInfo.weight}`;
                   

                }

            }
            xhr.send();

          }

    

    
    

    document.getElementById('img1').src = "";
    document.getElementById('img2').src = "";
    
}

