'use strict';

let module 	= require('../dist/module'),
	data 	= require('./data/data');


exports = function saveUrl(userToken, URL) {
	return module.saveUrl(userToken, URL, data)
}


exports = function saveUrl(userToken, URL) {
	return module.saveUrl(userToken, URL, data);
}


exports = function getUrls(userToken) {
	return module.getUrls(userToken, data);
}


exports = function removeUrl(userToken, URL) {
	return module.removeUrl(userToken, URL, data);
}


exports = function getUsersByDomain(URL) {
	return module.getUsersByDomain(URL, data);
}


exports = function getRecommendedUrls(userToken, URL) {
	return module.getRecommendedUrls(userToken, URL, data);
}



