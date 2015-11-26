/**
 * Created by wzq on 15-10-26.
 */
Ext.define('ITPAR.view.projectdiscussion.ProjectDiscussionController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.projectdiscussion',

	requires: [
		'ITPAR.view.projectdiscussion.newdoc.NewDoc'
		//'ITPAR.view.projectdiscussion.docgrids.DocGrids'
	],

	docGridsShow: function (projectdiscussion) {
		var projectdiscussion = this.getView();
		projectdiscussion.mask('正在加载，请稍候 ...');
		projectdiscussion.add({
			xtype: 'docgrids',
			reference: 'docgrids',
			config: {
				discuss: projectdiscussion.config.discuss
			},

			region: 'south'
		});

		projectdiscussion.unmask();
	}

});