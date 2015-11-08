/**
 * Created by wzq on 15-10-14.
 */
Ext.define('ITPAR.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    /**
     * Called when the view is created
     */
    init: function() {
    },

	onLoginClick: function() {

		// This would be the ideal location to verify the user's credentials via
		// a server-side lookup. We'll just move forward for the sake of this example.

		// Set the localStorage value to true
		localStorage.setItem("ITPARLoggedIn", true);

		// Remove Login Window
        Ext.getCmp("welcome-view-id").destroy();

		// Add the main view to the viewport
		Ext.create({
			xtype: 'app-main'
		});

	}

});