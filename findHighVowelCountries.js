// run with: node findHighVowelCountries.js countries.txt

const fs = require('fs');
const filename = process.argv[2];

// Make sure a filename is provided
if (!filename) {
    console.log('Usage: node findHighVowelCountries.js FILENAME');
    process.exit(1);
}

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const countryArray = data.split('\n');

    // Find countries with more than 50% vowels
    const highVowelCountries = countryArray.filter(country => {
        const vowelCount = country.toLowerCase().replace(/[^aeiou]/g, '').length;
        const percentageVowels = (vowelCount / country.length) * 100;
        return percentageVowels > 50;
    });

    console.log('Countries with > 50% vowels:', highVowelCountries);
});
