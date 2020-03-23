# eterna-milonga: Eterna Milonga

## Watch this space
This is a new project. I'm homebound during the pandemic, so want to do something that teaches me some new stuff but also makes other homebound tanguer@s (aka Argentine tango dancers) a little happier at the same time.

## The plan

- [x] Distill my last 10+ years' archives of milonga/encuentro/festival playlists into known-good tango tracks
- [x] Put those into a [spreadsheet](https://docs.google.com/spreadsheets/d/1Jngt-ChzwgPwuPkv4jmfI781nqLGEg2UC7Ef8NS_eBg/edit?usp=sharing) and pull out the singer, orquesta, year, dance style, etc for future databasin'
- [x] Query the Spotify API to get the Spotify URI references for each of those tracks
- [x] Pseudocode the [logic](https://github.com/jessicaschilling/eterna-milonga/issues/2) for building tandas that obey the basics of The Tango Rules™
- [x] Pseudocode the [logic](https://github.com/jessicaschilling/eterna-milonga/issues/3) for building those tandas into milonga-length playlists that keep orquestas sanely spaced
- [x] Figure out the best means for getting abovementioned spreadsheet into ... some kind of [relational database](https://airtable.com/shrCrtSUHsEsM5wrf) ... that will both be germane to this project and will teach me things I can use later
- [x] Real-code the tanda logic (output just as a list of Spotify URIs)
- [x] Create super-basic proof-of-concept UI with embedded Spotify iframes for single tanda at a time
- [ ] Clean up the tanda logic to stop partial tandas from appearing in the UI (this happens when there aren't enough songs in the database to fulfill the tanda rules) and ignore La Cumparsita for now
- [ ] Atone for my JavaScript sins (anyone want to help?) and get the tanda logic to actually be robust
- [ ] Real-code the playlist logic (output just as a list of Spotify URIs)
- [ ] Learn how to feed Spotify a list of URIs and get a playlist back in return
- [ ] Build a UI for this thing: push a button, get a playlist built in your personal Spotify account
- [ ] Add a pref: three- or four-song tango tandas?
- [ ] Add a pref: three- or four-song vals tandas?
- [ ] Add a pref: cortinas, y/n?
- [ ] Add a pref: choose a playlist length
- [ ] Add a pref: choose a cortina (specific track, or maybe just genre)

## License

[MIT](LICENSE.md)
