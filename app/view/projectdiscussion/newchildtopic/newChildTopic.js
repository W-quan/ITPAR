Ext.define("ITPAR.view.projectdiscussion.newchildtopic.newChildTopic", {
	extend: "Ext.window.Window",

	requires: [
		"ITPAR.view.projectdiscussion.newchildtopic.newChildTopicController",
		"ITPAR.view.projectdiscussion.newchildtopic.newChildTopicModel"
	],

	xtype: 'newchildtopic',

	controller: "projectdiscussion-newchildtopic-newchildtopic",
	viewModel: {
		type: "projectdiscussion-newchildtopic-newchildtopic"
	},

	closable: true,

	width: 680,
	height: 420,

	//背景不可编辑
	modal: true,

	title: '新建子主题',

	listeners: {
		beforeshow: 'setParentTopicInfo'
	},

	items: [{
		html: '<h1  style="text-align:center">新建子主题</h1>'
	}, {
		xtype: 'form',
		reference: 'newChildTopicForm',

		layout: {
			type: 'vbox',
			align: 'stretch'
		},
		margin: '10 10 10 10',

		defaults: {
			margin: '10 20 0 20'
		},

		items: [{
			xtype: 'textfield',
			//xtype: 'displayfield',
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
			margin: '40 30 0 0',
			listeners: {
				click: 'newChildTopicSubmit'
			}
		}, {
			text: '取消',
			listeners: {
				click: 'closeWindows'
			}
		}]
	}]
});
