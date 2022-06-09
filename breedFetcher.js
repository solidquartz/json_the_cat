const request = require('request');


const breedName = process.argv[2];

request(`https://api.thecatpi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  console.log('error: ', error);
  // console.log('statusCode: ', response && response.statusCode);
  // console.log('body: ', body);
  const data = JSON.parse(body);

  if (!data[0]) {

    return console.log(`Sorry, ${breedName} was not found.`);

  } else {
    console.log(data[0].description);
  }

});
