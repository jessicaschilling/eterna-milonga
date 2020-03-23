var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keykS9z272dhleMla'}).base('appnR9FrKCD0OV7Q9');
var totalTableRecords = 856 //change this if you add any new rows to the Airtable
var randomRand = Math.floor(Math.random() * totalTableRecords) + 1;

function GetSeedTrack() {

  base('Tracks').select({
      view: 'All tracks',
      maxRecords: 1,
      filterByFormula: "{rand} = '"+ randomRand +"'"
    }).firstPage(function(err, records) {
      // if (err) {
      //   console.error(err)
      //   }
        var trackIDInnerInner = records.map(function(record) {
          console.log('Retrieved', record.id);
          return record.id;
        });
      console.log(trackIDInnerInner);
      localStorage.setItem('trackID', trackIDInnerInner);
    },
  );
console.log("Local storage: " + localStorage.getItem('trackID'));
return localStorage.getItem('trackID');

}
export default GetSeedTrack;
