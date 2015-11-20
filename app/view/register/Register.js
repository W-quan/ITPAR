/**
 * Created by wzq on 15-10-19.
 */
Ext.define('ITPAR.view.register.Register', {
    extend: 'Ext.form.Panel',

    requires: [
	    'Ext.button.Button',
	    'Ext.container.ButtonGroup',
	    'Ext.form.field.File',
	    'Ext.layout.container.VBox',
	    'ITPAR.view.register.RegisterController',
	    'ITPAR.view.register.RegisterModel'
    ],

    xtype: 'register',

    viewModel: {
        type: 'register'
    },

    controller: 'register',

    layout: {
        type: 'vbox',
        align: 'center'
    },

    width: 300,
    title: '&nbsp;&nbsp;&nbsp;注册',
	//titleAlign: 'center',
    id: 'registerPanel',

    frame: true,
    style: {
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)'
    },

    defaultType: 'textfield',
    defaults: {
        height: '25px',
	    width: 300,
	    margin: '10 0 10 0'
    },

    items: [{
        name: 'name',
	    fieldLabel: '用户名',
	    allowBlank: false,
	    margin: '30 0 10 0'
        //emptyText: '用户名'
    }, {
        name: 'password',
	    fieldLabel: '密码',
        inputType: 'password',
	    allowBlank: false
    }, {
        name: 'email',
	    fieldLabel: '邮箱地址',
        inputType: 'email'
	    //allowBlank: false
    }, {
	    name: 'mobile',
	    fieldLabel: '手机号码'
    },{
	    name: 'qq',
	    fieldLabel: 'QQ'
    },{
	    name: 'micromessage',
	    fieldLabel: '微信'
    },{
	    xtype: 'fileuploadfield',
	    name: 'photo',
	    fieldLabel: '头像',
	    buttonText: '选择'
    },{
        xtype: 'buttongroup',
        columns: 2,
        items: [{
            xtype: 'button',
            text: '重置',
            width: 60,
            margin: '00 10 10 50',
            handler: function () {
                this.up('form').getForm().reset();
            }
        }, {
            xtype: 'button',
            text: '注册',
            formBind: true,
            width: 60,
            margin: '00 10 00 30',
            listeners: {
                click: 'onRegisterSubmit'
            }
        }]
    }]
});