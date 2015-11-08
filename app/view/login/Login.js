/**
 * Created by wzq on 15-10-14.
 */
Ext.define('ITPAR.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    requires: [
        'Ext.button.Button',
        'Ext.container.ButtonGroup',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.layout.container.VBox',
        'ITPAR.view.login.LoginController'
    ],

    controller: 'login',

    width: 300,
    //margin: '10 170 280 20',
    title: '&nbsp;&nbsp;&nbsp;登陆',
    reference: 'form',
    layout: 'vbox',
    frame: true,
    style: {
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)'
    },
    items: [{
        xtype: 'textfield',
        name: 'username',
        width: '250px',
        height: '25px',
        allowBlank: false,
        emptyText: '用户名',
        margin: '20 10 10 20',
        frame: true,
        style: {
            lineHeight: '25px',
            padding: '10',
            fontsize: '14px',
            background: '#666'
        }
    }, {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        emptyText: '密码',
        height: '25px',
        margin: '10 10 10 20',
        width: '250px',
        allowBlank: false,
        style: {
            lineHeight: '25px',
            padding: '10',
            fontsize: '14px'
        }
    }, {
        margin: '0 0 0 20',
        html: '<input type="checkbox" id="remember_me"/><span>记住我</span> <a href="#">(忘记密码?)</a>'
    }, {
        xtype: 'buttongroup',
        columns: 2,
        items: [{
            xtype: 'button',
            text: '重置',
            width: 60,
            margin: '10 10 10 55',
            handler: function () {
                this.up('form').getForm().reset();
            }
        }, {
            xtype: 'button',
            text: '登陆',
            //formBind: true,
            width: 60,
            margin: '10 10 40 20',
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }]
});


