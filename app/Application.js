/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ITPAR.Application', {
	extend: 'Ext.app.Application',

	name: 'ITPAR',

	stores: [
		// TODO: add global / shared stores here
	],

	views: [
		'ITPAR.view.login.Login',
		'ITPAR.view.main.Main'
	],

	launch: function () {
		// TODO - Launch the application
		var id = Ext.util.Cookies.get('id');
		var password = Ext.util.Cookies.get('password');
		if (id != null && password != null) {
			this.login(id, password);
		}

		Ext.create({
			xtype: 'app-main'
		});
	},

	login: function (id, password) {
		Ext.Ajax.request({
			//url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
			url: mServerUrl,
			method: 'POST',
			params: {
				type: '4',
				id: id,
				password: password
			},
			async: false,

			success: function (response, opts) {
				var data = Ext.decode(response.responseText);
				User_Info.Logined = true;
				User_Info.id = data.user.id;
				User_Info.name = data.user.name;
				User_Info.mobile = data.user.mobile;
				User_Info.email = data.user.email;
				User_Info.qq = data.user.qq;
				User_Info.micromessage = data.user.micromessage;
				User_Info.photo = data.user.photo;
			},

			failure: function (response, opts) {
			}
		});
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});

//保存登陆用户信息
var User_Info = {
	Logined: false,
	id: '',
	name: '',
	mobile: '',
	email: '',
	qq: '',
	micromessage: '',
	photo: ''
};

var  mServerUrl = 'http://127.0.0.1:8080/FinalPublishingPlatform/broker';