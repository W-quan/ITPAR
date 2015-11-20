/**
 * Created by wzq on 15-10-14.
 */
Ext.define('ITPAR.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',

	requires: [
		'Ext.util.Cookies'
	],

	/**
	 * Called when the view is created
	 */
	init: function () {
	},

	onLoginSubmit: function () {
		var logincontroller = this;
		var formview = this.getView();
		var form = formview.getForm();
		if (form.isValid()) {
			form.submit({
				url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '4'
				},

				success: function (form, action) {
					//Ext.Msg.alert('登陆成功', '正在跳转...');
					var values = form.getValues();
					logincontroller.saveToCookies(values);
					logincontroller.saveUserInfo(action.result);
					logincontroller.toMainView();
				},
				failure: function (form, action) {
					Ext.Msg.alert('登陆失败', action.result.message);
				}
			});
		}

	},

	saveToCookies: function(values){
		Ext.util.Cookies.set('id', values.id);
		Ext.util.Cookies.set('password', values.password);
	},

	saveUserInfo: function (result) {
		User_Info.Logined = true;
		User_Info.id = result.user.id;
		User_Info.name = result.user.name;
		User_Info.mobile = result.user.mobile;
		User_Info.email = result.user.email;
		User_Info.qq = result.user.qq;
		User_Info.micromessage = result.user.micromessage;
		User_Info.photo = result.user.photo;
	},

	toMainView: function () {
		//刷新数据
		//var NavStore = ITPAR.store.NavTreeStore;
	    //var	storeProxy = NavStore.getProxy();
	    //storeProxy.extraParams.type = 5;
	    //NavStore.load();

		//NavStore.removeAll();
		//刷新页面
		var appmain = Ext.getCmp("appMain").destroy();
		Ext.create({
			xtype: 'app-main'
		});
	}

});

