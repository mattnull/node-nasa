node-nasa
=========

Node.js library for NASA's Open API
http://data.nasa.gov/api-info/

** This is work in progress

## Usage
```javascript
var nasa = new require('nasa')();

nasa.search('Pluto').on('data', function(error, response){
  console.log(error, response);
});
```
