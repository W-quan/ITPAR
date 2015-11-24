Ext.define('ITPAR.view.managemyproject.myprojectdiscussion.MyProjectDiscussionController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.managemyproject-myprojectdiscussion-myprojectdiscussion',

	loadMyProjectDiscussionInfo: function (sender, eOpts) {
		var thisController = this;
		var myprojectdiscussion = this.getView();

		Ext.Ajax.request({
			url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
			params: {
				type: 15,
				discuss: myprojectdiscussion.config.discussId
			},
			methods: 'POST',
			async: false,

			success: function (response, opts) {
				var data = Ext.decode(response.responseText);
				thisController.setFormValue(myprojectdiscussion, data);
			},

			failure: function (response, opts) {
				console.log('server-side failure with status code ' + response.status);
			}
		});
	},

	setFormValue: function (view, data) {
		var title = view.lookupReference('title');
		var abstractt = view.lookupReference('abstractt');
		var radiogroup = view.lookupReference('radiogroup');
		var someIdTextarea = view.lookupReference('someIdTextarea');
		var grant = view.lookupReference('grant');

		title.setValue(data.discuss.title);
		abstractt.setValue(data.discuss.abstractt);
		someIdTextarea.setValue(data.discuss.grantt);

		if (data.discuss.grantt == 'all') {
			radiogroup.setValue({radio: 'all'});
			grant.setValue('all');
		} else {
			radiogroup.setValue({radio: 'some'});
			grant.setValue(data.discuss.grantt);
		}
	},

	updateProjectDiscussionSubmit: function () {
		var radiogroup = this.lookupReference('radiogroup');
		var someIdTextarea = this.lookupReference('someIdTextarea');
		var grant = this.lookupReference('grant');

		var value = radiogroup.getChecked();
		if (value[0].inputValue == 'all') {
			grant.setValue('all');
		} else {
			if (someIdTextarea.getValue() == '授权用户的ID号,多个用户用空格分开'
				|| someIdTextarea.getValue() == 'some') {
				grant.setValue('');
			} else {
				grant.setValue(someIdTextarea.getValue());
			}
		}

		var thisController = this;
		var discuss = this.getView().config.discussId;
		var form = this.lookupReference('myprojectdiscussionform').getForm();
		//TODO 添加效验及多余的字段别提交
		if (form.isValid()) {
			form.submit({
				url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '16',
					discuss: discuss
				},

				success: function (form, action) {
					Ext.Msg.alert('更新项目沟通成功');

					thisController.reloadNavTreeStore;
				},
				failure: function (form, action) {
					Ext.Msg.alert('更新项目沟通失败');
				}
			});
		}
	},

	reloadNavTreeStore: function () {
		var NavTreePanel = Ext.getCmp('NavTreePanel');
		var store = NavTreePanel.getStore();
		store.load();
	},

	deleteMyProjectDiscussion: function () {
		var t = this;
		Ext.Msg.show({
			title: '确认删除?',
			message: '删除后,数据将无法恢复,你真的要删除吗?',
			buttons: Ext.Msg.YESNO,
			icon: Ext.Msg.QUESTION,
			fn: function (btn) {
				if (btn === 'yes') {
					t.yesDelete();
				} else if (btn === 'no') {
					//t.noDelete();
				}
			}
		});

	},

	yesDelete: function () {
		var thisController = this;
		var myprojectdiscussion = this.getView();
		Ext.Ajax.request({
			url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
			params: {
				type: 14,
				discuss: myprojectdiscussion.config.discussId
			},
			methods: 'POST',

			success: function (response, opts) {
				Ext.Msg.alert('删除成功');

				myprojectdiscussion.destroy();
				thisController.reloadNavTreeStore();
			},

			failure: function (response, opts) {
				Ext.Msg.alert('删除失败');
			}
		})
	}
});
