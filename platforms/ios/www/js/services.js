angular.module('starter.services', [])

.factory('Contactlist', function() {
    return {
        getAllContacts: function() {
            return [
			    { name: 'Contact 1' },
			    { name: 'Contact 2' },
			    { name: 'Contact 3'},
				{ name: 'Contact 4'}
            ];
        }
    };
});


