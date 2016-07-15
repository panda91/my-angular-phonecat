describe('PhonelistCtrl', function(){
	beforeEach(module('phonecatApp'));

	it('It should be a "phones" model with 3 phones', inject(function($controller){
		var scope = {};
		var ctrl = $controller('PhoneListCtrl', {$scope: scope});

		expect(scope.phones.length).toBe(3);
	}));

	it('It should be my name', inject(function($controller){
		var scope = {};
		var ctrl = $controller('PhoneListCtrl', {$scope: scope});

		expect(scope.name).toBe('Ngoc Anh');
	}));
});