// run with: node findVowelCountries.js countries.txt

const fs = require('fs');
const filename = process.argv[2];

// Make sure a filename is provided
if (!filename) {
    console.log('Usage: node findVowelCountries.js FILENAME');
    process.exit(1);
}

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;

    const countryArray = data.split('\n');

    // Find countries that both begin and end with a vowel
    const vowelCountries = countryArray.filter(country => {
        const firstLetter = country.charAt(0).toLowerCase();
        const lastLetter = country.slice(-1).toLowerCase();
        return 'aeiou'.includes(firstLetter) && 'aeiou'.includes(lastLetter);
    });

    console.log('Countries that both begin and end with a vowel:', vowelCountries);
});
