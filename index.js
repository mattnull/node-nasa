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
var e = require('events')

var NASA = function(){
	this.baseURI = 'http://data.nasa.gov/api/';
	this.e = e;
};

NASA.prototype.getRecentDatasets = function(count){
	count = count || false;
	var self = this;
	var e = new this.e.EventEmitter();

	var endpoint = 'get_recent_datasets';
	endpoint = count ? endpoint+'?count='+count : endpoint;
	var url = this.baseURI+endpoint;
	
	request.get(url, function(err, res, body){
		e.emit('data', err, body);
	});

	return e;
};

NASA.prototype.getDatasets = function(search){
};

NASA.prototype.getDateDatasets = function(){};

NASA.prototype.getCategoryDatasets = function(){};

NASA.prototype.getTagDatasets = function(){};

NASA.prototype.search = function(search){

	search = search ? search.replace(/ /g, '+') : false;
	var self = this;
	var e = new this.e.EventEmitter();
	var endpoint = 'get_search_results';
	endpoint = search ? endpoint+'?search='+search : endpoint;
	var url = this.baseURI+endpoint;
	
	request.get(url, function(err, res, body){
		e.emit('data', err, body);
	});

	return e;
};

NASA.prototype.getDateIndex = function(){};

NASA.prototype.getCategoryIndex = function(){};

NASA.prototype.getTagIndex = function(){};

module.exports = NASA;

var nasa = new NASA();
var recent = nasa.getRecentDatasets(1).on('data', function(err, res){
	console.log(res)
});

var search = nasa.search('planet').on('data', function(err, res){

});
