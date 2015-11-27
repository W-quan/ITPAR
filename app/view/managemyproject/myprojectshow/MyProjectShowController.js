Ext.define('ITPAR.view.managemyproject.myprojectshow.MyProjectShowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.managemyproject-myprojectshow-myprojectshow',

	loadMyProjectShowInfo: function (sender, eOpts) {
		var thisController = this;
		var myprojectshow = this.getView();

		Ext.Ajax.request({
			//url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
			url: mServerUrl,
			params: {
				type: 2,
				exhibit: myprojectshow.config.projectshowId
			},
			methods: 'POST',

			success: function (response, opts) {
				var data = Ext.decode(response.responseText);
				thisController.addBasicForm(myprojectshow, data);
				thisController.addDetailsForm(myprojectshow, data.details);
			},

			failure: function (response, opts) {
				console.log('server-side failure with status code ' + response.status);
			}
		});
	},

	addBasicForm: function (myprojectshow, data) {
		myprojectshow.add({
			xtype: 'myprojectshowbasic',
			config: {
				projectshowId: myprojectshow.config.projectshowId,
				data: data
			}
		});
	},

	addDetailsForm: function (myprojectshow, data) {
		for(var i in data){
			myprojectshow.add({
				xtype: 'myprojectshowdetails',
				config: {
					data: data[i]
				}
			});
		}
	}
});
