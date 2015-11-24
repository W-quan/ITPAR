/**
 * Created by wzq on 15-10-22.
 */
Ext.define('ITPAR.view.newprojectshow.NewProjectShow', {
    extend: 'Ext.panel.Panel',

    requires: [
	    'Ext.form.Panel',
	    'Ext.form.RadioGroup',
	    'Ext.form.field.File',
	    'Ext.form.field.Text',
	    'Ext.form.field.TextArea',
	    'Ext.layout.container.VBox',
	    'ITPAR.view.newprojectshow.NewProjectShowController',
	    'ITPAR.view.newprojectshow.NewProjectShowModel'
    ],

    xtype: 'newprojectshow',

    viewModel: {
        type: 'newprojectshow'
    },

    controller: 'newprojectshow',

	margin: '10 00 10 20',
	autoScroll: true,
	closable: true,

	title: '新建项目展示',

    items: [{
	    html: '<h1  style="text-align:center">新建项目展示</h1>'
    },{
        xtype: 'form',
	    title: '基本信息',

	    margin: '00 30 10 20',
	    layout: {
		    type: 'vbox',
		    align: 'stretch'
	    },

	    defaults: {
		    margin: '10 0 0 10'
	    },
	    items: [{
		    xtype: 'textfield',
		    fieldLabel: '项目名称',
		    name: 'projectname'
	    }, {
		    xtype: 'textarea',
		    fieldLabel: '项目简介',
		    name: 'projectIntroduction'
		    //height: 100
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
			    change: 'setTextAreaEnable'
		    }
	    },{
		    xtype: 'textarea',
		    reference: 'someIdTextarea',
		    height:　'40',
		    margin: '0 0 0 115',
		    disabled: true,
		    emptyText: '授权用户的ID号,多个用户用空格分开'
	    }],

	    buttons: [{
		    text: '提交'
	    }]
    },{
	    xtype: 'form',
	    title: '项目详细信息',
	    margin: '00 30 10 20',
	    layout: {
		    type: 'vbox',
		    align: 'stretch'
	    },

	    defaults: {
		    margin: '10 0 0 10'
	    },
	    items: [{
		    xtype: 'textarea',
		    fieldLabel: '项目详细信息'
	    },{
		    xtype: 'filefield',
		    fieldLabel: '图片',
		    name: 'photo',
		    buttonText: '选择'
	    },{
		    xtype: 'filefield',
		    fieldLabel: '图片',
		    buttonText: '选择'
	    },{
		    xtype: 'filefield',
		    fieldLabel: '图片',
		    buttonText: '选择'
	    }],

	    buttons: [{
		    text: '提交本段信息'
	    }]
    }]
});