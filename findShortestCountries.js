// run with: node findShortestCountries.js countries.txt

const fs = require('fs');
const filename = process.argv[2];

// Make sure a filename is provided
if (!filename) {
    console.log('Usage: node findShortestCountries.js FILENAME');
    process.exit(1);
}

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const countryArray = data.split('\n');

    // Filter out empty lines
    const nonEmptyCountries = countryArray.filter(country => country.trim() !== '');

    if (nonEmptyCountries.length === 0) {
        console.log('No valid countries found in the file.');
        process.exit(1);
    }

    // Find the length of the shortest country name
    const shortestLength = Math.min(...nonEmptyCountries.map(country => country.length));

    // Find countries with the shortest name
    const shortestCountries = nonEmptyCountries.filter(country => country.length === shortestLength);

    console.log('Shortest country names:', shortestCountries);
});


