angular.module('starter.controllers', [])

.controller('ContactCtrl', function($scope, Contactlist) {
	$scope.contacts = Contactlist.getAllContacts();
})

.controller('contacts', ['$scope', 'ContactsFactory', function($scope, ContactsFactory) {
    
	$scope.findContact = function(contactSearch)
    {
        ContactsFactory.find(contactSearch).then(function(contacts)
        {
            $arr = [];
            for (var i = 0; i < contacts.length; i++)
            {
				$arr.push({name: contacts[i].name.formatted})
			}
            $scope.contacts = $arr;
        });
    };
 
}])

.controller('contacts2', ['$scope', 'PhoneContactsFactory', function($scope, PhoneContactsFactory) {
    
	$scope.findContact = function()
    {
        PhoneContactsFactory.find().then(function(contacts)
        {
            $arr = [];
            for (var i = 0; i < contacts.length; i++)
            {
				$arr.push({name: contacts[i].name.formatted})
			}
            $scope.contacts = $arr;
        });
    }; 
}]);

