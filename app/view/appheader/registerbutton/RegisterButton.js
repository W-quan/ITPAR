/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.appheader.registerbutton.RegisterButton', {
    extend: 'Ext.button.Button',

    requires: [
        'ITPAR.view.appheader.registerbutton.RegisterButtonModel',
		'ITPAR.view.appheader.registerbutton.RegisterButtonController'
    ],

    xtype: 'registerbutton',

    viewModel: {
        type: 'registerbutton'
    },

    controller: 'registerbutton',

	margin: '12 0 0 400',
	width: '60px',
	text: '注册',
	listeners: {
		click: 'toRegisterView'
	}
});