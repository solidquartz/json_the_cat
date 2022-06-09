const request = require('request');




const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatpi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {

    if (callback === error) {
      console.log('error: ', error);

      if (callback === null) {
        const data = JSON.parse(body);

        if (!data[0]) {
          return console.log(`Sorry, ${breedName} was not found.`);

        } else {
          return (data[0].description);
        }
      }
    }

  });

};

module.exports = { fetchBreedDescription };