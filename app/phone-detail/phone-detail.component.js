angular.module('phoneDetail').component('phoneDetail', {
	templateUrl: 'phone-detail/phone-detail.template.html',
	controller: ['$routeParams', '$http', function PhoneDetailController(routeParams, http){
		var self = this;

		http.get('phones/'+routeParams.phoneId+'.json').then(function(res){
			self.phone = res.data;
		});
	}]
})