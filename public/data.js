//Loads JSON Data

async function loadJSON(){
    console.log("Yes")
    const objectData = fetch('vectors.json').then(function(response){
        response.json().then(function(data) {
            populateData(objectData)
            console.log(data);
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
    console.log("JSON data recieved: " + objectData)
}
loadJSON();