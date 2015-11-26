
Ext.define("ITPAR.view.managemyproject.myprojectshow.myprojectshowbasic.MyProjectShowBasic",{
    extend: "Ext.form.Panel",

    requires: [
        "ITPAR.view.managemyproject.myprojectshow.myprojectshowbasic.MyProjectShowBasicController",
        "ITPAR.view.managemyproject.myprojectshow.myprojectshowbasic.MyProjectShowBasicModel"
    ],

    controller: "managemyproject-myprojectshow-myprojectshowbasic-myprojectshowbasic",
    viewModel: {
        type: "managemyproject-myprojectshow-myprojectshowbasic-myprojectshowbasic"
    },

	xtype: 'myprojectshowbasic',

	reference: 'myProjeceShowBasicForm',

	config: {
		projectshowId: null,
		data: null
	},

	listeners: {
		beforerender: 'showFormInfo'
	},

	title: '基本信息',

	frame: true,
	style: 'border-color: #cecece',
	margin: '00 30 10 20',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	defaults: {
		margin: '10 10 0 10'
	},
	items: [{
		xtype: 'textfield',
		fieldLabel: '项目名称',
		reference: 'title',
		name: 'title'
	}, {
		xtype: 'textarea',
		fieldLabel: '项目简介',
		reference: 'abstractt',
		name: 'abstractt'
	},{
		xtype: 'radiogroup',
		reference: 'radiogroup',
		fieldLabel: '项目授权',
		layout: 'vbox',
		items: [{
			inputValue: 'all',
			boxLabel: '所有用户',
			checked: true
		},{
			inputValue: 'some',
			boxLabel: '指定用户'
		}],

		listeners: {
			change: 'setTextAreaState'
		}
	},{
		xtype: 'textarea',
		reference: 'someIdTextarea',
		height:　'40',
		margin: '0 10 0 115',
		disabled: true,
		emptyText: '授权用户的ID号,多个用户用空格分开'
	},{
		xtype: 'textfield',
		name: 'grantt',
		reference: 'grant',
		hidden: true
	}],

	buttons: [{
		text: '更新',
		margin: '10 10 0 0',
		listeners: {
			click: 'updateMyprojectShowBasicSumbit'
		},
		style:{
			background: '#3A9619'
		}
	}]
});
