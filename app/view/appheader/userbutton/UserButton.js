/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.appheader.userbutton.UserButton', {
    extend: 'Ext.button.Button',

    requires: [
        'ITPAR.view.appheader.userbutton.UserButtonModel',
		'ITPAR.view.appheader.userbutton.UserButtonController'
    ],

    xtype: 'userbutton',

    viewModel: {
        type: 'userbutton'
    },

    controller: 'userbutton',

	margin: '12 0 0 20',
	icon: 'resources/images/button/user_icon.png',
	//iconAlign: 'center',
	style: {
		background:　'none',
		border: 'none'
	},
	menu:　[{
		text:　'个人资料'
	},{
		text:　'退出',
		listeners: {
			click: 'goToWelcomeView'
		}
	}],

});