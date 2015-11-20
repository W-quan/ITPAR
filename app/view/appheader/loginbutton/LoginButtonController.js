/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.appheader.loginbutton.LoginButtonController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginbutton',

	/**
	 * Called when the view is created
	 */
	init: function () {

	},

	ToLoginView: function () {
		var main = Ext.getCmp('appMain');

		var NavTreePanel = Ext.getCmp('NavTreePanel');
		if (NavTreePanel != null)
			NavTreePanel.destroy();

		var centerTabPanel = Ext.getCmp('center-tabpanel');
		if (centerTabPanel != null)
			centerTabPanel.destroy();

		var registerPanel = Ext.getCmp('registerPanel');
		if (registerPanel != null)
			registerPanel.destroy();

		main.add({
			xtype: 'login',

			region: 'center',
			collapsible: false,
			split: true,
			margin: '80 450 180 450'
		});
	}
});