const request = require('request');
const yargs = require('yargs');
const fs = require('fs');

// 1301 lombard street
/*const argv = yargs
  .options({
  	a: {
  	  demand: true,
  	  alias: 'address',
  	  describe: 'Address to fetch weather for',
  	  string: true
  	}
  })
  .help()
  .argv;
*/
//console.log(argv);

var api_key_file = JSON.parse(fs.readFileSync('./api_key.json', 'utf-8'));

//var encodedAddress = encodeURIComponent(argv.address);
/*
request({
	url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}, (error, response, body) => {
	if (error) {
	  console.log('Unable to connect to Google servers.');
	} else if (body.status === 'ZERO_RESULTS') {
	  console.log('Unable to find that address.');
	} else if (body.status === 'OK') {
	  console.log(body.results[0].formatted_address);
	} else {
	  console.log(response);
	}
});
*/