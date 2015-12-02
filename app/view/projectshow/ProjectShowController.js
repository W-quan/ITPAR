/**
 * Created by wzq on 15-10-22.
 */
Ext.define('ITPAR.view.projectshow.ProjectShowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectshow',

    /**
     * Called when the view is created
     */
    init: function() { },

	tplRender: function () {
		var projectshow = this.getView();
		projectshow.mask('正在加载，请稍候 ...');
		Ext.Ajax.request({
			url: mServerUrl,
			params: {type: 2, exhibit: projectshow.config.exhibit},
			methods: 'POST',
			success: function(response, opts) {
				var data = Ext.decode(response.responseText);

				//添加随机数,使图片地址不同,刷新图片
				var date = new Date();
				var random = date.getMilliseconds();
				for(var i in data.details){
					data.details[i].image1 += '&time=' + random;
					data.details[i].image2 += '&time=' + random;
					data.details[i].image3 += '&time=' + random;
				}
				projectshow.tpl.overwrite(projectshow.body, data);
				projectshow.unmask();
			},

			failure: function(response, opts) {
				console.log('server-side failure with status code ' + response.status);
				projectshow.unmask();
			}
		});
	},

	destroyItself: function (sender, eOpts) {
		this.getView().destroy();
	}
});