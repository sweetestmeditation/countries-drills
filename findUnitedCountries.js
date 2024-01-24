// run with: node findUnitedCountries.js countries.txt

const fs = require('fs');
const filename = process.argv[2];

// Make sure a filename is provided
if (!filename) {
    console.log('Usage: node findUnitedCountries.js FILENAME');
    process.exit(1);
}

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const countryArray = data.split('\n');

    // Find countries with "United" in their name
    const unitedCountries = countryArray.filter(country => country.includes('United'));

    console.log('Countries with "United" in their name:', unitedCountries);
});
