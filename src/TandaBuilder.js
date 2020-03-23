import React from 'react';

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keykS9z272dhleMla'}).base('appnR9FrKCD0OV7Q9');
var randomRand = Math.floor(Math.random() * 856) + 1;

function TandaBuilder() {
    console.log("NOW BUILDING A TANDA :)");
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
            var trackIDFullList = [trackID1];
            console.log("SEED: " + orquestaAll + " - " + singerAll + " - " + year1 + " - " + title1 + " - " + trackID1 );
            localStorage.setItem('title', title1);

            //get more tracks: first, all the other tracks in the database that complement this one
            base('Tracks').select({
                maxRecords: 100,
                view: "All tracks",
                filterByFormula: "AND(SEARCH('"+ singerAll +"',{singer}),'"+ orquestaAll +"'={orquesta},'"+ yearUpper +"'>={year},'"+ yearLower +"'<={year},'"+ trackID1 +"'!={trackID})"
            }).eachPage(function page(records, fetchNextPage) {
                records.forEach(function(record) {
                    trackIDFullList.push(record.get('trackID'));
                    console.log("MATCH: " + record.get('orquesta') + " - " + record.get('singer') + " - " + record.get('year') + " - " + record.get('prettyTitle') + " - " + record.get('trackID'));
                });
                fetchNextPage();
              },
                  function done(err) {
                  if (err) { console.error(err); return; }
                  // console.log(trackIDFullList);
                  // Then shuffle the array of complimentary trackIDs
                  const shuffledTrackIDFullList = trackIDFullList.sort(() => 0.5 - Math.random());
                  // Then choose the first 3 of that shuffled array
                  let selectedTrackIDs = shuffledTrackIDFullList.slice(0, 3);
                  console.log("SELECTED SPOTIFY IDS: " + selectedTrackIDs);
                  localStorage.setItem('tanda', selectedTrackIDs);
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

  var tandaSeedSong = localStorage.getItem('title');
  var tandaTrackIDsAsString = localStorage.getItem('tanda');
  var tandaTrackIDs = tandaTrackIDsAsString.split(",");

  return (
    <p>
    <em>Seed song: {tandaSeedSong}</em>
    <br/>
    Song 1: <a href={ 'https://open.spotify.com/track/' + tandaTrackIDs[0] } target="_blank" rel="noopener noreferrer">{tandaTrackIDs[0]}</a>
    <br/>
    Song 2: <a href={ 'https://open.spotify.com/track/' + tandaTrackIDs[1] } target="_blank" rel="noopener noreferrer">{tandaTrackIDs[1]}</a>
    <br/>
    Song 3: <a href={ 'https://open.spotify.com/track/' + tandaTrackIDs[2] } target="_blank" rel="noopener noreferrer">{tandaTrackIDs[2]}</a>
    </p>
  );
}

export default TandaBuilder;
