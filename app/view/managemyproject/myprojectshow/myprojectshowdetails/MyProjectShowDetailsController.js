Ext.define('ITPAR.view.managemyproject.myprojectshow.myprojectshowdetails.MyProjectShowDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.managemyproject-myprojectshow-myprojectshowdetails-myprojectshowdetails',

	showFormInfo: function () {
		var myprojectshowdetail = this.getView();
		var data = myprojectshowdetail.config.data;

		var abstractt = this.lookupReference('abstractt');
		abstractt.setValue(data.detail);
	},

	updateDetailSumbit: function () {
		var myprojectshowdetail = this.getView();
		var form = this.lookupReference('updateMyProjectShowDtailForm');
		if (form.isValid()) {
			form.submit({
				url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '20',
					detail: myprojectshowdetail.config.data.id
				},

				success: function (form, action) {
					Ext.Msg.alert('成功', '更新项目展示详细信息成功');
				},
				failure: function (form, action) {
					Ext.Msg.alert('失败', '更新项目展示详细信息失败');
				}
			});
		}
	},

	//TODO 提交更新失败后, filefield异常,不能设置disabled属性
	whichImage: function () {
		var radiogroup = this.lookupReference('radiogroup');
		var image1 = this.lookupReference('image1');
		var image2 = this.lookupReference('image2');
		var image3 = this.lookupReference('image3');
		var which = this.lookupReference('which');

		var value = radiogroup.getChecked();
		if(value.length == 0){
			//image1.setDisabled(false);
			//image2.setDisabled(false);
			//image3.setDisabled(false);
			//which.setValue('');
		}else {
			switch (value[0].inputValue){
				case 'image1':
					image1.setDisabled(false);
					image2.setDisabled(true);
					image3.setDisabled(true);
					which.setValue('1');
					break;
				case 'image2':
					image1.setDisabled(true);
					image2.setDisabled(false);
					image3.setDisabled(true);
					which.setValue('2');
					break;
				case 'image3':
					image1.setDisabled(true);
					image2.setDisabled(true);
					image3.setDisabled(false);
					which.setValue('3');
					break;
				default:
					image1.setDisabled(false);
					image2.setDisabled(false);
					image3.setDisabled(false);
					which.setValue('');
					break;
			}
		}
	},

	updateImageSumbit: function () {
		var myprojectshowdetail = this.getView();
		var form = this.lookupReference('updateMyProjectShowImageForm');
		if (form.isValid()) {
			form.submit({
				url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '21',
					detail: myprojectshowdetail.config.data.id
				},

				success: function (form, action) {
					Ext.Msg.alert('成功', '更新项目展示详细信息对应图片成功');
				},
				failure: function (form, action) {
					Ext.Msg.alert('失败', '更新项目展示详细信息对应图片失败');
					//form.reset();
				}
			});
		}
	}
});
