// run with: node findSingleVowelCountries.js countries.txt

const fs = require('fs');
const filename = process.argv[2];

// Make sure a filename is provided
if (!filename) {
    console.log('Usage: node findSingleVowelCountries.js FILENAME');
    process.exit(1);
}

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const countryArray = data.split('\n');

    // Find countries with only one vowel in their name
    const singleVowelCountries = countryArray.filter(country => {
        const vowels = country.toLowerCase().match(/[aeiou]/g);
        return vowels && new Set(vowels).size === 1;
    });

    console.log('Countries with only one vowel in their name:', singleVowelCountries);
});
