//Loads JSON Data

async function loadJSON(){
    const objectData = fetch('vectors.json').then(function(response){
        response.json().then(function(data) {
            populateData(data)
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
}
loadJSON();