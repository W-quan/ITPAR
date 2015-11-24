/**
 * Created by wzq on 15-10-22.
 */
Ext.define('ITPAR.view.newprojectdiscussion.NewProjectDiscussion', {
    extend: 'Ext.container.Container',

    requires: [
	    'Ext.form.Panel',
	    'Ext.form.RadioGroup',
	    'Ext.form.field.Text',
	    'Ext.form.field.TextArea',
	    'Ext.layout.container.VBox',
	    'ITPAR.view.newprojectdiscussion.NewProjectDiscussionController',
	    'ITPAR.view.newprojectdiscussion.NewProjectDiscussionModel'
    ],

    xtype: 'newprojectdiscussion',

    viewModel: {
        type: 'newprojectdiscussion'
    },
    controller: 'newprojectdiscussion',

	margin: '10 20 10 20',
	autoScroll: true,

	title: '新建项目沟通',

    items: [{
		html: '<h1  style="text-align:center">新建项目沟通</h1>'
    },{
	    xtype: 'form',

	    layout: {
		    type: 'vbox',
		    align: 'stretch'
	    },

	    reference: 'newprojectdiscussionform',

	    items: [{
		    xtype: 'textfield',
		    fieldLabel: '项目名称',
		    name: 'title'
	    },{
		    xtype: 'textarea',
		    fieldLabel: '项目描述',
		    name: 'abstractt',
		    height: 150
	    },{
		    xtype: 'radiogroup',
		    fieldLabel: '项目授权',
		    reference: 'radiogroup',
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
		    text: '提交',
		    margin: '60 30 0 0',
		    scope: this,
		    listeners: {
			    click: 'newProjectDiscussionSubmit'
		    }
	    },{
		    text: '取消',
		    scope: this
	    }]

    }]
});