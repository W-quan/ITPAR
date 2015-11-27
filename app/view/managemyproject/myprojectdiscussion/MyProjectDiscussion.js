
Ext.define("ITPAR.view.managemyproject.myprojectdiscussion.MyProjectDiscussion",{
    extend: "Ext.panel.Panel",

    requires: [
        "ITPAR.view.managemyproject.myprojectdiscussion.MyProjectDiscussionController",
        "ITPAR.view.managemyproject.myprojectdiscussion.MyProjectDiscussionModel"
    ],

    controller: "managemyproject-myprojectdiscussion-myprojectdiscussion",
    viewModel: {
        type: "managemyproject-myprojectdiscussion-myprojectdiscussion"
    },

	xtype: 'myprojectdiscussion',

	margin: '10 20 10 20',
	autoScroll: true,
	closable: true,

	title: '我的项目开发沟通',

	config: {
		discussId: null
	},

	listeners: {
		beforerender: 'loadMyProjectDiscussionInfo'
	},

	items: [{
		html: '<h1  style="text-align:center">管理我的项目沟通</h1>'
	},{
		xtype: 'form',

		layout: {
			type: 'vbox',
			align: 'stretch'
		},

		reference: 'myprojectdiscussionform',

		items: [{
			xtype: 'textfield',
			fieldLabel: '项目名称',
			name: 'title',
			reference: 'title'
		},{
			xtype: 'textarea',
			fieldLabel: '项目描述',
			name: 'abstractt',
			reference: 'abstractt',
			height: 150
		},{
			xtype: 'radiogroup',
			fieldLabel: '项目授权',
			reference: 'radiogroup',
			layout: 'vbox',
			items: [{
				inputValue: 'all',
				boxLabel: '所有用户',
				name: 'radio'
			},{
				inputValue: 'some',
				boxLabel: '指定用户',
				name: 'radio'
			}],

			listeners: {
				change: 'setTextAreaState'
			}
		},{
			xtype: 'textarea',
			reference: 'someIdTextarea',
			margin: '0 0 0 105',
			disabled: true,
			emptyText: '授权用户的ID号,多个用户用空格分开'
		},{
			xtype: 'textfield',
			reference: 'grant',
			name: 'grantt',
			hidden: true
		}],

		buttonAlign: 'center',
		buttons: [{
			text: '更新',
			margin: '60 30 0 0',
			listeners: {
				click: 'updateProjectDiscussionSubmit'
			},
			style:{
				background: '#3A9619'
			}

		},{
			text: '删除',
			style:{
				background: '#B31744'
			},

			listeners: {
				click: 'deleteMyProjectDiscussion'
			}
		}]

	}]

});
