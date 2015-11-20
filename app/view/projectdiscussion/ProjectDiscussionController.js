/**
 * Created by wzq on 15-10-26.
 */
Ext.define('ITPAR.view.projectdiscussion.ProjectDiscussionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectdiscussion',

	requires: [
		'ITPAR.view.projectdiscussion.newdoc.NewDoc',
		//'ITPAR.view.projectdiscussion.docgrids.DocGrids'
	],

	/**
     * Called when the view is created
     */
    init: function() {

    },

	onNewDocButtonClick: function(){
		Ext.create({xtype: 'newdoc'}).show();
	},

	abstractAnddocShow: function () {
		var projectdiscussion = this.getView();
		projectdiscussion.mask('正在加载，请稍候 ...');
		this.abstracttShow(projectdiscussion);
		this.docGridsShow(projectdiscussion);
		projectdiscussion.unmask();
	},

	abstracttShow: function (projectdiscussion) {
		Ext.Ajax.request({
			url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
			params: {type: 8, topic: projectdiscussion.config.topic},
			methods: 'POST',
			async: false,
			success: function(response, opts) {
				var data = Ext.decode(response.responseText);
				console.log(data);

				projectdiscussion.add({
					html: '<h1  style="text-align:center">主题详情</h1>' +
							'<p style="text-indent:2em"> '+ data.topics.abstractt+ '</p>'
				});
			},

			failure: function(response, opts) {
				console.log('server-side failure with status code ' + response.status);
			}
		});
	},

	docGridsShow: function (projectdiscussion) {
		projectdiscussion.add({
			xtype: 'docgrids',
			config: {
				discuss: projectdiscussion.config.discuss
			}
		});

	}

});