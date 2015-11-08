/**
 * Created by wzq on 15-10-19.
 */
Ext.define('ITPAR.view.welcome.WelcomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.welcome',

    /**
     * Called when the view is created
     */
    init: function() {

    },

	ToProjectShowWithoutLogin: function () {
		// Remove Login Window
		Ext.getCmp("welcome-view-id").destroy();

		// Add the main view to the viewport
		Ext.create({
			xtype: 'app-main'
		});

	}
});