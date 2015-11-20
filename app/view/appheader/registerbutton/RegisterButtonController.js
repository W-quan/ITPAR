/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.appheader.registerbutton.RegisterButtonController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.registerbutton',

	requires: [
		'ITPAR.view.register.Register'
	],

	/**
	 * Called when the view is created
	 */
	init: function () {

	},

	toRegisterView: function () {
		var main = Ext.getCmp('appMain');

		var NavTreePanel = Ext.getCmp('NavTreePanel');
		if (NavTreePanel != null)
			NavTreePanel.destroy();

		var centerTabPanel = Ext.getCmp('center-tabpanel');
		if (centerTabPanel != null)
			centerTabPanel.destroy();

		var loginPanel = Ext.getCmp('LoginPanel');
		if (loginPanel != null)
			loginPanel.destroy();

		main.add({
			xtype: 'register',

			region: 'center',
			collapsible: false,
			split: true,
			margin: '30 450 60 450'
		});
	}
});