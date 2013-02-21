// get_recent_datasets
// get_dataset
// get_date_datasets 
// get_category_datasets
// get_tag_datasets
// get_search_results
// get_date_index
// get_category_index
// get_tag_index
// http://data.nasa.gov/api-info/
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

	var queryStr = (typeof id === 'string' && id) ? 'slug' : 'id';
	
	var endpoint = 'get_dataset';
	endpoint = id ? endpoint+'?'+queryStr+'='+id : endpoint;
	var url = this.baseURI+endpoint;

	this.request(url, callback);
};

NASA.prototype.getCategoryDatasets = function(id, count, callback){

	id = id || false;
	count = count || false;

	if(!id){
		callback('Please provide a dataset ID or Slug');
	}

	var queryStr = (typeof id === 'string') ? 'slug=' + id : 'id=' + id;
		queryStr += (count) ? '&count='+count : '';

	var endpoint = 'get_category_datasets';
	endpoint = id ? endpoint+'?'+queryStr+'='+id : endpoint;
	var url = this.baseURI+endpoint;
	console.log(id, url)
	this.request(url, callback);
};

NASA.prototype.getTagDatasets = function(id, count, callback){

	id = id || false;
	count = count || false;

	if(!id){
		callback('Please provide a dataset ID or Slug');
	}

	var queryStr = (typeof id === 'string') ? 'slug=' + id : 'id=' + id;
		queryStr += (count) ? '&count='+count : '';

	var endpoint = 'get_tag_datasets';
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

	var queryStr = (date) ? 'date='+ date : '';
	queryStr += (count) ? '&count='+count : '';
	
	var endpoint = 'get_date_datasets';
	endpoint = endpoint+'?'+queryStr;
	var url = this.baseURI+endpoint;
	
	this.request(url, callback)
};

NASA.prototype.search = function(search, callback){

	search = search ? search.replace(/ /g, '+') : false;
	callback = callback || function(){};
	var endpoint = 'get_search_results';
	endpoint = search ? endpoint+'?search='+search : endpoint;
	var url = this.baseURI+endpoint;
	
	this.request(url, callback);
};
/*
 * {param} index - possible values are date, tag, category
 */
NASA.prototype.getIndex = function(index, callback){
	index = index || false;
	if(!index) callback('Please provide an index type - ex. date')
	callback = callback || function(){};
	var endpoint = 'get_'+index+'_index';
	var url = this.baseURI+endpoint;
	this.request(url, callback)
};

module.exports = NASA;
