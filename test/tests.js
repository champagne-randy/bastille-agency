'use strict';

var chai 				= require('chai'),
	expect 				= chai.expect,
	module 				= require('../dist/module'),
	saveUrl 			= module.saveUrl,
	getUrls 			= module.getUrls,
	removeUrl 			= module.removeUrl,
	getUsersByDomain 	= module.getUsersByDomain,
	getRecommendedUrls 	= module.getRecommendedUrls,
	dataFile			= './test/data.json';



describe('saveUrl()', ()=> {
	
	it('should save a url that does not exist', function() {
		expect(saveUrl('randy','https://www.google.com/?gws_rd=ssl',dataFile)).to.be.true;
	});

	it('should not save a url that already exists', function() {
		expect(saveUrl('vanessa','https://www.google.com/?gws_rd=ssl',dataFile)).to.be.false;
	});
	
});


describe('getUrls()', ()=> {
	
	it('should return an array with 1 url', function() {
		expect(getUrls('randy',dataFile)).to.be.ok;
	});
	
});


describe('removeUrl()', ()=> {
	
	it('should confirm that url was removed', function() {
		expect(removeUrl('randy', 'https://www.google.com/?gws_rd=ssl',dataFile)).to.be.true;
	});
	
});


describe('getUsersByDomain()', ()=> {
	
	it('should return 1 user', ()=> {
		expect(getUsersByDomain('google.com',dataFile)).to.be.at.least(1);
	});
	
});


describe('getRecommendedUrls()', ()=> {
	
	it('should return a collection with at least 1 reccommendation', () =>{
		expect(getRecommendedUrls('randy', 'https://www.google.com/?gws_rd=ssl', dataFile)).to.be.at.least(1);
	});
	
});




