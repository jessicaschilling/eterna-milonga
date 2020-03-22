import React from 'react';

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keykS9z272dhleMla'}).base('appnR9FrKCD0OV7Q9');
var randomRand = Math.floor(Math.random() * 856) + 1;

function RandomTrack() {
    base('Tracks').select({
        maxRecords: 1,
        view: "All tracks",
        filterByFormula: "{rand} = '"+ randomRand +"'"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            var title = record.get('prettyTitle');
            console.log('Title:', title );
            console.log(randomRand);
            localStorage.setItem('title', title);

        });
        fetchNextPage();

  }, function done(err) {
      if (err) { console.error(err); return; }
  }
);
  return <p>{localStorage.getItem('title')}</p>;
}

export default RandomTrack;
