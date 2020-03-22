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
            var trackID1 = record.get('trackID');
            var title1 = record.get('prettyTitle');
            var orquestaAll = record.get('orquesta');
            var singerAll = record.get('singer');
            var year1 = record.get('year');
            var yearLower = year1 - 3;
            var yearUpper = year1 + 3;
            console.log("1. " + orquestaAll + " - " + singerAll + " - " + year1 + " - " + title1 );
            localStorage.setItem('title', title1);
//get more tracks
            base('Tracks').select({
                maxRecords: 10,
                view: "All tracks",
                filterByFormula: "AND(SEARCH('"+ singerAll +"',{singer}),'"+ orquestaAll +"'={orquesta},'"+ yearUpper +"'>={year},'"+ yearLower +"'<={year},'"+ trackID1 +"'!={trackID})"
            }).eachPage(function page(records, fetchNextPage) {
                records.forEach(function(record) {
                    console.log(record.get('orquesta') + " - " + record.get('singer') + " - " + record.get('year') + " - " + record.get('prettyTitle'));
                });
                fetchNextPage();
              },
                  function done(err) {
                  if (err) { console.error(err); return; }
              }
            );
// end get more tracks
        });
        fetchNextPage();

  },
      function done(err) {
      if (err) { console.error(err); return; }
  }
);
  return <p>{localStorage.getItem('title')}</p>;
}

export default RandomTrack;
