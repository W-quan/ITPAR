/**
 * Created by wzq on 15-10-22.
 */
Ext.define('ITPAR.view.newprojectshow.NewProjectShowController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.newprojectshow',

	/**
	 * Called when the view is created
	 */
	init: function () {
	},

	setTextAreaState: function () {
		var radiogroup = this.lookupReference('radiogroup');
		var someIdTextarea = this.lookupReference('someIdTextarea');
        var value = radiogroup.getChecked();
		if (value[0].inputValue == 'some') {
			someIdTextarea.setDisabled(false);
		}else{
			someIdTextarea.setDisabled(true);
		}
	},

	newProjectShowBasicInfoSubmit: function () {
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

		var newprojectshow = this.getView();
		var form = this.lookupReference('newProjeceShowBasicForm').getForm();
		//TODO 添加效验及多余的字段别提交
		if (form.isValid()) {
			form.submit({
				url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '17'
				},

				success: function (form, action) {
					Ext.Msg.alert('成功', '新建项目展示成功');

					//保存返回的项目展示id号
					newprojectshow.config.projectshowId = action.result.exhibit.id;

					//刷新列表
					var NavTreePanel = Ext.getCmp('NavTreePanel');
					var store = NavTreePanel.getStore();
					store.load();
				},
				failure: function (form, action) {
					Ext.Msg.alert('失败', '新建项目展示失败');
				}
			});
		}
	},

	newProjectShowDetailsInfoSubmit: function () {
		var exhitbit = this.lookupReference('exhitbit');
		exhitbit.setValue(this.getView().config.projectshowId);

		var form = this.lookupReference('newProjeceShowDetailsForm').getForm();

		if (form.isValid()) {
			form.submit({
				url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '18'
				},

				success: function (form, action) {
					Ext.Msg.alert('成功', '添加项目展示详细信息成功');
					form.reset();
				},
				failure: function (form, action) {
					Ext.Msg.alert('失败', '添加项目展示详细信息失败');
				}
			});
		}
	}
});