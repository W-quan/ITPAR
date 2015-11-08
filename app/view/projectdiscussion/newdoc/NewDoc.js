/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.projectdiscussion.newdoc.NewDoc', {
    extend: 'Ext.window.Window',

    requires: [
	    'Ext.form.Panel',
	    'Ext.form.field.File',
	    'Ext.form.field.Text',
	    'Ext.form.field.TextArea',
	    'Ext.layout.container.VBox',
	    'ITPAR.view.projectdiscussion.newdoc.NewDocController',
	    'ITPAR.view.projectdiscussion.newdoc.NewDocModel'
    ],

    xtype: 'newdoc',

    viewModel: {
        type: 'newdoc'
    },

    controller: 'newdoc',

	width: 600,
	height: 280,

    items: [{
	    html: '<h1  style="text-align:center">发布新文档</h1>'
    },{
	    xtype: 'form',
	    margin: '10 10 10 10',
	    layout: {
		    type: 'vbox',
		    align: 'stretch'
	    },

	    items: [{
		    xtype: 'textfield',
		    fieldLabel: '文档名称',
		    name: 'docname'
	    },{
		    xtype: 'textarea',
		    fieldLabel: '文档内容描述',
		    name: 'docIntroduction'
		    //height: 100
	    },{
		    xtype: 'filefield',
		    fieldLabel: '文档文件',
		    buttonText: '选择'
	    }],

	    buttonAlign: 'center',
	    buttons: [{
		    text: '提交'
	    },{
		    text: '取消'
	    }]

    }
    ]
});