/*const grib2json = require('weacast-grib2json')
//Converts grib to json
    function convertData(){
        grib2json('./grb.f000', {
            data: true,
            output: 'vectors.json'
        });
    }
    convertData();

*/
//Loads JSON Data from File

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