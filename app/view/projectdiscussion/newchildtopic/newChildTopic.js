Ext.define("ITPAR.view.projectdiscussion.newchildtopic.newChildTopic", {
	extend: "Ext.form.Panel",

	requires: [
		"ITPAR.view.projectdiscussion.newchildtopic.newChildTopicController",
		"ITPAR.view.projectdiscussion.newchildtopic.newChildTopicModel"
	],

	xtype: 'newchildtopic',

	controller: "projectdiscussion-newchildtopic-newchildtopic",
	viewModel: {
		type: "projectdiscussion-newchildtopic-newchildtopic"
	},

	margin: '10 30 10 30',
	autoScroll: true,
	closable: true,

	title: '新建子主题',

	items: [{
		html: '<h1  style="text-align:center">新建子主题</h1>'
	}, {
		xtype: 'form',

		layout: {
			type: 'vbox',
			align: 'stretch'
		},

		defaults: {
			margin: '10 0 0 0'
		},

		items: [{
			xtype: 'textfield',
			fieldLabel: '父主题',
			reference: 'parentTopicAbstract'
		}, {
			xtype: 'textfield',
			name: 'topic',
			reference: 'parentTopicId',
			hidden: true
		},{
			xtype: 'textfield',
			fieldLabel: '子主题名称',
			name: 'title'
		}, {
			xtype: 'textarea',
			fieldLabel: '主题内容',
			name: 'abstractt',
			height: 180
		}],

		buttonAlign: 'center',
		buttons: [{
			text: '提交',
			margin: '80 30 0 0',
			scope: this,
			listeners: {
				click: 'newChildTopicSubmit'
			}
		}, {
			text: '取消',
			scope: this
		}]
	}]
})
;
