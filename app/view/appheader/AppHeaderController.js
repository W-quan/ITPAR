/**
 * Created by wzq on 15-10-15.
 */
Ext.define('ITPAR.view.appheader.AppHeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.appheader',

	requires: [
		'ITPAR.view.appheader.loginbutton.LoginButton',
		'ITPAR.view.appheader.newbutton.NewButton',
		'ITPAR.view.appheader.registerbutton.RegisterButton',
		'ITPAR.view.appheader.userbutton.UserButton'
	],

	/**
     * Called when the view is created
     */
    init: function() {
    },

	addButton: function() {
		var loggedIn = localStorage.getItem("ITPARLoggedIn");
		var headerPanel = Ext.getCmp('HeaderPanel');
		if(loggedIn == null){
			headerPanel.add({xtype: 'registerbutton'});
			headerPanel.add({xtype: 'loginbutton'});
		} else{
			headerPanel.add({xtype: 'newbutton'});
			headerPanel.add({xtype: 'userbutton'});
		}
	}
});