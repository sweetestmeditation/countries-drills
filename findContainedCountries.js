// run with: node findContainedCountries.js countries.txt

const fs = require('fs');
const filename = process.argv[2];

// Make sure a filename is provided
if (!filename) {
    console.log('Usage: node findContainedCountries.js FILENAME');
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

    // Find country names that contain another country name
    const containedCountries = [];

    nonEmptyCountries.forEach(country1 => {
        nonEmptyCountries.forEach(country2 => {
            if (country1 !== country2 && country1.includes(country2)) {
                containedCountries.push({ containing: country1, contained: country2 });
            }
        });
    });

    // Filter out entries where a country is not contained within its name
    const filteredContainedCountries = containedCountries.filter(entry => {
        return entry.containing.includes(entry.contained);
    });

    console.log('Country names that contain another country name:', filteredContainedCountries);
});


