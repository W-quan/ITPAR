/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.appheader.userbutton.UserButtonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userbutton',

    /**
     * Called when the view is created
     */
    init: function() {

    },

	goToWelcomeView: function(){
		localStorage.removeItem('ITPARLoggedIn');

		var main = Ext.getCmp('appMain');
		main.destroy();

		Ext.create({
			xtype: 'welcome'
		});
	}
});