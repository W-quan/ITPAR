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
    title: '&nbsp;&nbsp;&nbsp;登陆',
    id: 'LoginPanel',

	layout: {
		type: 'vbox',
		align: 'center'
	},

    frame: true,
    style: {
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)'
    },

	defaults: {
		height: '25px',
		width: 300,
		allowBlank: false
	},
    items: [{
        xtype: 'textfield',
        name: 'id',
	    fieldLabel: 'ID',
	    margin: '30 0 10 0'
    }, {
        xtype: 'textfield',
	    fieldLabel: '密码',
        name: 'password',
        inputType: 'password',
	    margin: '10 0 10 0'
    }, {
        margin: '10 0 0 20',
	    //TODO 记住我
	    //xtype: 'checkbox',
	    //boxLabel: '记住我',
        html: '<input type="checkbox" id="remember_me"/><span>记住我</span> <a href="#">(忘记密码?)</a>'
    }, {
        xtype: 'buttongroup',
        columns: 2,
        items: [{
            xtype: 'button',
            text: '重置',
            width: 60,
            margin: '30 10 10 55',
            handler: function () {
                this.up('form').getForm().reset();
            }
        }, {
            xtype: 'button',
            text: '登陆',
            formBind: true,
            width: 60,
            margin: '30 10 40 20',
            listeners: {
                click: 'onLoginSubmit'
            }
        }]
    }]
});


