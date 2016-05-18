'use strict';

let url  = require('url'),
	fs 	 = require('fs'),
	path = require('path'),
	//Map  = require('collections/map'),
	Set  = require('collections/set');


export function saveUrl(userToken, URL, dataFile) {

	let isSaved = false;

	// load data
	let data = loadData(dataFile);

	// add user if it doesn't exist already
	if (!data.get(userToken)){
		data.set(userToken, new Set());
	}

	let user = data.get(userToken);
	URL = url.parse(URL);
	if(!user.has(URL)){
		// save url
		isSaved = data.get(userToken).add(url.parse(URL));	
		
		// persist data to disk
		saveData(dataFile, data);

		// set flag to true
		isSaved = true;
	}

	return isSaved;
}


export function getUrls(userToken, dataFile) {
	let col = null;

	// load data
	let data = loadData(dataFile);

	// fetch user
	let user = data.get(userToken);

	// fetch the user's url collection
	if(user)
		col = user.toArray();

	return col;
}


export function removeUrl(userToken, URL, dataFile) {
	let result = false;

	// load data
	let data = loadData(dataFile);

	// fetch user
	let user = data.get(userToken);

	// remove url from the user's collection
	if(user)
		result = user.remove(url.parse(URL));

	return result;
}


export function getUsersByDomain(URL, dataFile) {
	let domain = getDomain(url.parse(URL));
	console.log('the domain is: ',domain);
	let users = [];

	// load data
	let data = loadData(dataFile);

	// fetch all users who saved this url
	data.forEach(function(collection, userToken){
		collection.forEach(function(key, url){
			if(getDomain(url) === domain)
				users.push(userToken);
		});
	});

	return users;
}


export function getRecommendedUrls(userToken, URL, dataFile) {
	let recs = [];

	//load data
	let data = loadData(dataFile);

	//get recs
	rec = traverseGraph(url, recs, 0, 3);

	return recs;
}



//** helper functions

function getDomain(urlObj) {
	return urlObj.hostname;
}

function loadData(dataFile) {
	let data;
	fs.readFile(dataFile, 'utf8', function (err, chunk) {
		if (err) throw err;
		data = JSON.parse(chunk);
	});

	console.log('loaded dataFile: ', data);

	// initialize map if it's empty
	if (!data){
		console.log('initialize data');
		data = new Map();
	}

	return data;
}

function saveData(dataFile, data) {
	fs.writeFile(dataFile, JSON.stringify(data), function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("JSON saved to data.json");
		}
	});
}

function traverseGraph(url, recs, numHops, limit) {
	numHops += 1;
	if (numHops != limit){
		// we're done return
		let node = getNode(url);

		if(node.A())
			recs.push(node.A().getUrl());

		if(node.B())
			recs.push(node.B().getUrl());

		if(node.C())
			recs.push(node.C().getUrl());

		return recs;
	}
	
	// else recurse
	traverseGraph(url, recs, numHops, limit);
}

function getNode(url){
	return {};
}


