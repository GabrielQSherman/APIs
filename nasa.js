// document.getElementById('btn1').addEventListener('click', button_function);
onload_function()
function onload_function() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.nasa.gov/planetary/apod?api_key=Fgrr1lJp3BQ5AUgM9k0EuSkLS0R9RhUKbSavz4dP`,true);

    xhr.onload = () => {

        console.log(JSON.parse(xhr.responseText));
        
        const nasaData = JSON.parse(xhr.responseText);



        document.getElementById('image').src = nasaData.hdurl;

        document.getElementById('title').innerHTML += nasaData.title;

        document.getElementById('date').innerHTML += nasaData.date;

        document.getElementById('photoinfo').innerHTML += '<hr>' + nasaData.explanation;

    }

    xhr.send();
}

