/**
 * Created by wzq on 15-10-19.
 */
Ext.define('ITPAR.view.register.RegisterController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.register',

	/**
	 * Called when the view is created
	 */
	init: function () {
	},

	onRegisterSubmit: function () {
		var formview = this.getView();
		var form = formview.getForm();
		if (form.isValid()) {
			form.submit({
				url: mServerUrl,
				//url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '3'
				},

				success: function (form, action) {
					Ext.Msg.alert('注册成功', '你的ID号是:' + action.result.user.id + ',ID号是你登陆时的身份凭证');
					form.reset();
				},
				failure: function (form, action) {
					Ext.Msg.alert('注册失败', action.result.message);
				}
			});
		}
	}
});