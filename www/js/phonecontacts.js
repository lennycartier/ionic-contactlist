angular.module('starter.phonecontacts', [])

.factory("ContactsFactory", ['$q', function($q)
{
    return {
        find: function(filter)
        {
            //promesas
            var deferred = $q.defer();
            //opciones de contactos
            var options = new ContactFindOptions();
            //añadimos los filtros de búsqueda
            options.filter = filter;
            options.multiple = true;
            //campos que queremos obtener
            var fields = ["displayName", "name"];
            //acepta tres parámetros, los campos, la respuesta, el error y las opciones
            navigator.contacts.find(fields, 
				function(contacts){ deferred.resolve(contacts); }, //onsuccess
				function(error){ deferred.reject(error); }, // onerror
				options);
            return deferred.promise;
        }
    };
}])

.factory("PhoneContactsFactory", ['$q', function($q)
{
    return {
        find: function()
        {
            var deferred = $q.defer(); // asynchronous
            var options = new ContactFindOptions();
            options.multiple = true;
            var fields = ["displayName", "name"];
            
            navigator.contacts.find(fields, 
				function(contacts){ deferred.resolve(contacts); }, //onsuccess
				function(error){ deferred.reject(error); }, // onerror
				options);
            return deferred.promise;
        }
	};
}]);

