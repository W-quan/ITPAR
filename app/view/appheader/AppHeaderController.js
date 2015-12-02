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
		var loggedIn = User_Info.Logined;
		var headerPanel = this.getView();
		if(loggedIn == false){
			headerPanel.add({xtype: 'registerbutton'});
			headerPanel.add({xtype: 'loginbutton'});
		} else{
			headerPanel.add({xtype: 'newbutton'});

			var date = new Date();
			var time = date.getMilliseconds();
			headerPanel.add({
				xtype: 'userbutton',
				icon: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker?type=101' + '&time=' + time
			});
		}
	}
});