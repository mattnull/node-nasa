node-nasa
=========

Node.js library for NASA's Open API
<br/>
http://data.nasa.gov/api-info/
## Installation
`npm install node-nasa`

## Usage
```javascript
/** Usage **/
var nasa = new NASA();

// params -- limit, callback
nasa.getRecentDatasets(10, function(error, response){
  console.log(error, response)
});

//params -- search term, callback
nasa.search('planet', function(error, response){
	console.log(error, response)
});

//params -- dataset ID, callback
nasa.getDataset(619, function(error, response){
	console.log(error, response)
});

//params -- date, limit, callback
nasa.getDateDatasets('2011-10', 20, function(error, response){
	console.log(error, response)
});

//params -- index type (possible types - date, tag, category)
//callback 
nasa.getIndex('category', function(error, response){
	console.log(error, response)
});

// params -- category, limit, callback
nasa.getCategoryDatasets('earth-science', 20, function(error, response){
	console.log(error, response)
});

// params -- tag, limit, callback
nasa.getTagDatasets('apollo', 25, function(error, response){
	console.log(error, response)
});
```
