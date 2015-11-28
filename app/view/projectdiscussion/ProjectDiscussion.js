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
		discuss: null,
		topicTreeStore: null
	},

	listeners: {
		render: 'docGridsShow'
	},

	items: [{
		region: 'north',
		margin: '10 10 10 10',
		reference: 'topicDetails',
		config: {
			topicId: -1,
			topicAbstract: '项目开发沟通'
		},

		html: '<h1  style="text-align:center">主题详情</h1>' +
				'<p style="text-align:center"> 点击右边主题查看主题详情 </p>'
	},{
		region: 'center'
	}]
});

