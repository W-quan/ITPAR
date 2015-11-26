Ext.define('ITPAR.view.managemyproject.myprojectshow.myprojectshowbasic.MyProjectShowBasicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.managemyproject-myprojectshow-myprojectshowbasic-myprojectshowbasic',

	showFormInfo: function () {
		var formview = this.getView();
		var data = formview.config.data;

		var title = this.lookupReference('title');
		var abstractt = this.lookupReference('abstractt');

		title.setValue(data.title);
		abstractt.setValue(data.abstractt);
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

	updateMyprojectShowBasicSumbit: function () {
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

		var myprojectshowbasic = this.getView();
		var form = myprojectshowbasic.getForm();
		//TODO 添加效验及多余的字段别提交
		if (form.isValid()) {
			form.submit({
				url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '19',
					exhibit: myprojectshowbasic.config.projectshowId
				},

				success: function (form, action) {
					Ext.Msg.alert('成功', '更新项目展示基本信息成功');
				},
				failure: function (form, action) {
					Ext.Msg.alert('失败', '新建项目展示基本信息失败');
				}
			});
		}
	}
});
