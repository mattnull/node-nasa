// get_recent_datasets
// get_dataset
// get_date_datasets 
// get_category_datasets
// get_tag_datasets
// get_search_results
// get_date_index
// get_category_index
// get_tag_index

var request = require('request');

var NASA = function(){
	this.baseURI = 'http://data.nasa.gov/api/';
};

NASA.prototype.request = function(url, callback){
	request.get(url, function(err, res, body){
		callback(err, body);
	});
};

NASA.prototype.getRecentDatasets = function(count, callback){
	count = count || false;
	var endpoint = 'get_recent_datasets';
	endpoint = count ? endpoint+'?count='+count : endpoint;
	var url = this.baseURI+endpoint;
	
	this.request(url, callback);
};

NASA.prototype.getDataset = function(id, callback){

	id = id || false;

	if(!id){
		callback('Please provide a dataset ID or Slug');
	}

	queryStr = (typeof id === 'string' && id) ? 'slug' : 'id';
	
	var endpoint = 'get_dataset';
	endpoint = id ? endpoint+'?'+queryStr+'='+id : endpoint;
	var url = this.baseURI+endpoint;

	this.request(url, callback);
};

/* 
	date – set to a date in the format YYYY or YYYY-MM 
	or YYYY-MM-DD (non-numeric characters are stripped from the var, 
	so YYYYMMDD or YYYY/MM/DD are also valid)
*/
NASA.prototype.getDateDatasets = function(date, count, callback){

	date = date || false;
	count = count || false;
	callback = callback || function(){};

	if(!date){
		callback('Please provide a dataset date');
	}

	queryStr = (date) ? 'date='+ date : '';
	queryStr += (count) ? '&count='+count : '';
	
	var endpoint = 'get_date_datasets';
	endpoint = endpoint+'?'+queryStr;
	var url = this.baseURI+endpoint;
	
	this.request(url, callback)
};

NASA.prototype.search = function(search, callback){

	search = search ? search.replace(/ /g, '+') : false;
	callback = callback || function(){};
	var self = this;
	var endpoint = 'get_search_results';
	endpoint = search ? endpoint+'?search='+search : endpoint;
	var url = this.baseURI+endpoint;
	
	this.request(url, callback);
};

NASA.prototype.getDateIndex = function(){};
NASA.prototype.getCategoryIndex = function(){};
NASA.prototype.getTagIndex = function(){};
NASA.prototype.getCategoryDatasets = function(){};
NASA.prototype.getTagDatasets = function(){};

module.exports = NASA;

// var nasa = new NASA();
// var recentDatasets = nasa.getRecentDatasets(10, function(err, res){
// 	console.log(res)
// });

// var search = nasa.search('planet', function(err, res){
// 	console.log(res)
// });

// var dataset = nasa.getDataset(619, function(err, res){
// 	console.log(res)
// });

// var dateDatasets = nasa.getDateDatasets('2011-10', 20, function(err, res){
// 	console.log(res)
// });
