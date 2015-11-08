/**
 * Created by wzq on 15-10-19.
 */
Ext.define('ITPAR.view.register.Register', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.button.Button',
        'Ext.container.ButtonGroup',
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
    //margin: '10 170 280 20',
    title: '&nbsp;&nbsp;&nbsp;注册',
    reference: 'form',

    frame: true,
    style: {
        //padding: '10',
        //fontsize: '14px',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)'
    },

    defaultType: 'textfield',
    default: {
        height: '25px',
        allowBlank: false
    },

    items: [{
        name: 'username',
        width: '250px',
        margin: '20 10 10 20',
        emptyText: '用户名'
    }, {
        name: 'password',
        inputType: 'password',
        emptyText: '密码',
        width: '250px',
        margin: '10 10 10 20'
    }, {
        name: 'email',
        inputType: 'email',
        emptyText: '邮箱',
        width: '250px',
        margin: '10 10 10 20'
    }, {
        xtype: 'buttongroup',
        columns: 2,
        items: [{
            xtype: 'button',
            text: '重置',
            width: 60,
            margin: '00 10 10 00',
            handler: function () {
                this.up('form').getForm().reset();
            }
        }, {
            xtype: 'button',
            text: '注册',
            formBind: true,
            width: 60,
            margin: '00 10 00 20',
            listeners: {
                click: 'onRegisterClick'
            }
        }]
    }]
});