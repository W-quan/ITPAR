/**
 * Created by wzq on 15-10-22.
 */
Ext.define('ITPAR.view.newprojectdiscussion.NewProjectDiscussionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newprojectdiscussion',

    /**
     * Called when the view is created
     */
    init: function() {

    },

	setTextAreaEnable: function () {
		var radiogroup = this.lookupReference('radiogroup');
		var someIdTextarea = this.lookupReference('someIdTextarea');
		var value = radiogroup.getChecked();
		if (value[0].inputValue == 'some') {
			someIdTextarea.setDisabled(false);
		}else{
			someIdTextarea.setDisabled(true);
		}
	},

	newProjectDiscussionSubmit: function(){
		var form = this.getView().getForm();
		if (form.isValid()) {
			form.submit({
				url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '13'
				},

				success: function (form, action) {
					//Ext.Msg.alert('注册成功', '你的ID号是:' + action.result.user.id + ',ID号是你登陆时的身份凭证');
					form.reset();
				},
				failure: function (form, action) {
					Ext.Msg.alert('注册失败', action.result.message);
				}
			});
		}

	}

});