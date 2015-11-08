/**
 * Created by wzq on 15-11-5.
 */
Ext.define('ITPAR.store.NavTreeStoreController', {
    extend: 'Ext.app.Controller',
	alias: 'controller.NavTreeStoreController',

    config: {
        /*
        Uncomment to add references to view components
        refs: [{
            ref: 'list',
            selector: 'grid'
        }],
        */

        /*
        Uncomment to listen for events from view components
        control: {
            'useredit button[action=save]': {
                click: 'updateUser'
            }
        }
        */
    },

    /**
     * Called when the view is created
     */
    init: function() {

    },

	setType: function () {
		var login = localStorage.getItem("ITPARLoggedIn");
		if(login == false){

		}
	}

});