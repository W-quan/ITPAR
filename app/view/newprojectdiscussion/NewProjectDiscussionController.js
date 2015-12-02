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
		var radiogroup = this.lookupReference('radiogroup');
		var someIdTextarea = this.lookupReference('someIdTextarea');
		var grant = this.lookupReference('grant');

		var value = radiogroup.getChecked();
		if (value[0].inputValue == 'all') {
			grant.setValue('all');
		}else {
			if(someIdTextarea.getValue() == '授权用户的ID号,多个用户用空格分开'){
				grant.setValue('');
			}else {
				grant.setValue(someIdTextarea.getValue());
			}
		}

		var form = this.lookupReference('newprojectdiscussionform').getForm();
		//TODO 添加效验及多余的字段别提交
		if (form.isValid()) {
			form.submit({
				url: mServerUrl,
				method: 'POST',
				params: {
					type: '13'
				},

				success: function (form, action) {
					Ext.Msg.alert('成功', '新建项目沟通成功');

					var NavTreePanel = Ext.getCmp('NavTreePanel');
					var store = NavTreePanel.getStore();
					store.load();

					form.reset();
				},
				failure: function (form, action) {
					Ext.Msg.alert('失败', action.result.message);
				}
			});
		}

	}

});