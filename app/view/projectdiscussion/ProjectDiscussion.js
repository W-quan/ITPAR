/**
 * Created by wzq on 15-10-26.
 */
Ext.define('ITPAR.view.projectdiscussion.ProjectDiscussion', {
    extend: 'Ext.panel.Panel',

    requires: [
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

	layout: 'border',

	config:{
		topic: undefined,
		discuss: undefined
	},

	listeners: {
		render: 'abstractAnddocShow'
	},

	items: [{
		region: 'center'
	}]
});

