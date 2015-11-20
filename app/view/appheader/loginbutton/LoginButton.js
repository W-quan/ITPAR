/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.appheader.loginbutton.LoginButton', {
    extend: 'Ext.button.Button',

    requires: [
        'ITPAR.view.appheader.loginbutton.LoginButtonModel',
		'ITPAR.view.appheader.loginbutton.LoginButtonController'
    ],

    xtype: 'loginbutton',

    viewModel: {
        type: 'loginbutton'
    },

    controller: 'loginbutton',

	margin: '12 0 0 20',
	width: '60px',
	text: '登陆',
	listeners: {
		click: 'ToLoginView'
	}
});