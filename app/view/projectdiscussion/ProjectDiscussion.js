/**
 * Created by wzq on 15-10-26.
 */
Ext.define('ITPAR.view.projectdiscussion.ProjectDiscussion', {
    extend: 'Ext.panel.Panel',

    requires: [
	    'Ext.button.Button',
	    'Ext.grid.Panel',
	    'ITPAR.view.projectdiscussion.ProjectDiscussionController',
	    'ITPAR.view.projectdiscussion.ProjectDiscussionModel'
    ],

    xtype: 'projectdiscussion',
	title: '项目沟通',

    viewModel: {
        type: 'projectdiscussion'
    },

    controller: 'projectdiscussion',

	margin: '10 20 10 20',
	autoScroll: true,
	closable: true,

	config:{
		topic: undefined,
		discuss: undefined
	},

	listeners: {
		render: 'abstractAnddocShow'
	}

	//items: [{
	//	reference: 'projectDiscussionAbstractt',
	//
	//	tpl: new Ext.XTemplate(
	//		'<h1  style="text-align:center">主题详情</h1>',
	//		'<tpl for="topics">',
	//		'<p style="text-indent:2em">{abstractt}</p>',
	//		'</tpl>'
	//	),
	//}]
});

