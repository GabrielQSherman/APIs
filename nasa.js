document.getElementById('search').addEventListener('click', onload_function);

let date = '2019-12-07';

onload_function()
function onload_function() {

    let xhr = new XMLHttpRequest() , endpoint = `https://api.nasa.gov/planetary/apod`, myKey = `?api_key=Fgrr1lJp3BQ5AUgM9k0EuSkLS0R9RhUKbSavz4dP`;

    if (document.getElementById('dateinput').value == '') {

        endpoint += myKey + "&date=" + date;
        
    } else {

        endpoint += myKey + '&date=' + document.getElementById('dateinput').value;

    }

    

    console.log(endpoint);
    

    xhr.open('GET', endpoint ,true);

    xhr.onload = () => {

        console.log(JSON.parse(xhr.responseText));
        
        const nasaData = JSON.parse(xhr.responseText);



        document.getElementById('image').src = nasaData.hdurl;

        document.getElementById('title').innerHTML =  nasaData.title;

        document.getElementById('date').innerHTML = 'Date: ' + nasaData.date;

        document.getElementById('photoinfo').innerHTML = 'About this image: ' + '<hr>' + nasaData.explanation;

    }

    xhr.send();
}

