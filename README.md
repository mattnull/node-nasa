node-nasa
=========

Node.js library for NASA's Open API
http://data.nasa.gov/api-info/

** This is work in progress

## Usage
```javascript
var nasa = new require('nasa')();

var recentDatasets = nasa.getRecentDatasets(10, function(error, response){
  console.log(response)
});

var search = nasa.search('planet', function(error, response){
  console.log(response)
});

var dataset = nasa.getDataset(619, function(error, response){
  console.log(response)
});

var dateDatasets = nasa.getDateDatasets('2011-10', 20, function(error, response){
  console.log(response)
});
```
