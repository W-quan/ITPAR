Ext.define('ITPAR.view.managemyproject.myprojectshow.myprojectshowdetails.MyProjectShowDetailsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.managemyproject-myprojectshow-myprojectshowdetails-myprojectshowdetails',

	showFormInfo: function () {
		var myprojectshowdetail = this.getView();
		var data = myprojectshowdetail.config.data;

		//添加随机数,使图片地址不同,刷新图片
		var date = new Date();
		var random = date.getMilliseconds();
		data.image1 += '&time=' + random;
		data.image2 += '&time=' + random;
		data.image3 += '&time=' + random;

		var abstractt = this.lookupReference('abstractt');
		abstractt.setValue(data.detail);

		var imageshow = this.lookupReference('imageshow');
		imageshow.html =
			'<hr style="color: rgba(206, 206, 206, 0.25)"/>' +
			'<div style="margin: 0 auto; text-align: center;">' +
			'<img src="' + data.image1 + '" alt="img1" width="100px" height="100px" style="margin: 20px"/>' +
			'<img src="' + data.image2 + '" alt="img2" width="100px" height="100px" style="margin: 20px"/>' +
			'<img src="' + data.image3 + '" alt="img3" width="100px" height="100px" style="margin: 20px"/>' +
			'</div>'
	},

	updateDetailSumbit: function () {
		var myprojectshowdetail = this.getView();
		var form = this.lookupReference('updateMyProjectShowDtailForm');
		if (form.isValid()) {
			form.submit({
				//url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				url: mServerUrl,
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

	whichImage: function () {
		var radiogroup = this.lookupReference('radiogroup');
		var image = this.lookupReference('image');
		var which = this.lookupReference('which');

		var value = radiogroup.getChecked();
		if (value.length == 0) {
			image.setDisabled(true);
			which.setValue('');
		} else {
			image.setDisabled(false);
			switch (value[0].inputValue) {
				case 'image1':
					which.setValue('1');
					break;
				case 'image2':
					which.setValue('2');
					break;
				case 'image3':
					which.setValue('3');
					break;
			}
		}
	},

	updateImageSumbit: function () {
		var myprojectshowdetail = this.getView();
		var form = this.lookupReference('updateMyProjectShowImageForm');
		if (form.isValid()) {
			form.submit({
				url: mServerUrl,
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
				}
			});
		}
	}
});
