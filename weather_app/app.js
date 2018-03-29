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
var api_key = api_key_file.key;
var url = `https://api.darksky.net/forecast/${api_key}/37.8267,-122.4233`;

request({
	url: url,
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		console.log(body.currently.temperature);
	} else {
		console.log('Unable to fetch weather.');
	}
});