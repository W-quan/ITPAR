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

	loginOut: function(){
		//localStorage.removeItem('ITPARLoggedIn');
		User_Info.Logined = false;
		Ext.util.Cookies.clear('id');
		Ext.util.Cookies.clear('password');

		Ext.Ajax.request({
			url: mServerUrl,
			params: {
				type: 22
			},
			methods: 'POST',

			success: function (response, opts) {
				console.log('登出成功');
			},

			failure: function (response, opts) {
				console.log('登出失败');
			}
		});

		var main = Ext.getCmp('appMain');
		main.destroy();

		Ext.create({
			xtype: 'app-main'
		});
	}
});