Ext.define("ITPAR.view.managemyproject.myprojectshow.myprojectshowdetails.MyProjectShowDetails", {
	extend: "Ext.panel.Panel",

	requires: [
		"ITPAR.view.managemyproject.myprojectshow.myprojectshowdetails.MyProjectShowDetailsController",
		"ITPAR.view.managemyproject.myprojectshow.myprojectshowdetails.MyProjectShowDetailsModel"
	],

	controller: "managemyproject-myprojectshow-myprojectshowdetails-myprojectshowdetails",
	viewModel: {
		type: "managemyproject-myprojectshow-myprojectshowdetails-myprojectshowdetails"
	},

	xtype: 'myprojectshowdetails',

	config: {
		data: null
	},

	listeners: {
		beforerender: 'showFormInfo'
	},

	title: '项目详细信息',
	margin: '10 30 10 20',
	frame: true,
	style: 'border-color: #cecece',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	defaults: {
		margin: '10 10 0 10'
	},
	items: [{
		xtype: 'form',
		reference: 'updateMyProjectShowDtailForm',

		layout: {
			type: 'vbox',
			align: 'stretch'
		},
		items: [{
			xtype: 'textarea',
			fieldLabel: '项目详细信息',
			name: 'abstractt',
			reference: 'abstractt',
			height: 100
		}],

		buttons: [{
			text: '更新详细信息',
			margin: '10 0 0 0',
			listeners: {
				click: 'updateDetailSumbit'
			},
			style: {
				background: '#3A9619'
			}
		}]
	}, {
		xtype: 'form',
		reference: 'updateMyProjectShowImageForm',

		layout: {
			type: 'vbox',
			align: 'stretch'
		},
		items: [{
			xtype: 'radiogroup',
			reference: 'radiogroup',
			fieldLabel: '要更改的图片',
			layout: 'hbox',
			items: [{
				inputValue: 'image1',
				boxLabel: '第一张'
				//checked: true
			},{
				inputValue: 'image2',
				boxLabel: '第二张',
				margin: '0 0 0 30'
			},{
				inputValue: 'image3',
				boxLabel: '第三张',
				margin: '0 0 0 30'
			}],

			listeners: {
				change: 'whichImage'
			}
		},{
			xtype: 'textfield',
			name: 'which',
			reference: 'which',
			hidden: true
		},{
			xtype: 'filefield',
			reference: 'image',
			fieldLabel: '图片',
			name: 'image',
			disabled: true,
			buttonText: '选择'
		}],

		buttons: [{
			text: '更新图片',
			margin: '10 0 0 0',
			listeners: {
				click: 'updateImageSumbit'
			},
			style: {
				background: '#3A9619'
			}
		}]
	}]
});
