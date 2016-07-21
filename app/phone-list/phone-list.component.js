angular.module("phoneList").component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', function PhoneListCtrl($http) {
        var self = this;
        self.orderProp = 'age';
        self.name = 'Ngoc Anh';

        $http.get('phones/phones.json').then(function(response) {
            self.phones = response.data;
        });
    }],
});
