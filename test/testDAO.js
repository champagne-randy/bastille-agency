var chai = require('chai');
var assert = chai.assert;
var iterations = require('../dist/dao');
var BinaryGap = iterations.BinaryGap;



describe('BinaryGap:', ()=> {
	
	it('should output 0 when N=0, 0', ()=> {
		assert( BinaryGap(0) == 0, 'There is no binary gap in 0' );
	});
	

	it('should output 0 when N=00000, 0', ()=> {
		assert( BinaryGap(00000) == 0, 'There is no binary gap in 0' );
	});


	it('should output 0 when N=1, 01', ()=> {
		var res = BinaryGap(1);
		assert( res === 0, `BinaryGap(1) returned ${res}`);
	});


	it('should output 0 when N=2, 10', ()=> {
		var res = BinaryGap(2);
		assert( res === 0, `BinaryGap(2) returned ${res}`);
	});


	it('should output 2 when N=9, 1001', ()=> {
		var res = BinaryGap(9);
		assert( res === 2, `BinaryGap(9) returned ${res}`);
	});


	it('should output 0 when N=15, 1111', ()=> {
		var res = BinaryGap(15);
		assert( res === 0, `BinaryGap(15) returned ${res}`);
	});


	it('should output 4 when N=529, 1000010001', ()=> {
		var res = BinaryGap(529);
		assert( res === 4, `BinaryGap(529) returned ${res}`);
	});


	it('should output 1 when N=20, 10100', ()=> {
		var res = BinaryGap(20);
		assert( res === 1, `BinaryGap(20) returned ${res}`);
	});


	it('should output 5 when N=1041, 10000010001', ()=> {
		var res = BinaryGap(1041);
		assert( res === 5, `BinaryGap(1041) returned ${res}`);
	});


	it('should output 2 when N=82, 101001', ()=> {
		var res = BinaryGap(82);
		assert( res === 2, `BinaryGap(82) returned ${res}`);
	});
});