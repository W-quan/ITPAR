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
			url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
			params: {type: 2, exhibit: projectshow.config.exhibit},
			methods: 'POST',
			success: function(response, opts) {
				var data = Ext.decode(response.responseText);
				console.log(data);
				projectshow.tpl.overwrite(projectshow.body, data);
				projectshow.unmask();
			},

			failure: function(response, opts) {
				console.log('server-side failure with status code ' + response.status);
			}
		});
	}
});