/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.appheader.newbutton.NewButton', {
    extend: 'Ext.button.Button',

    requires: [
        'ITPAR.view.appheader.newbutton.NewButtonModel',
		'ITPAR.view.appheader.newbutton.NewButtonController'
    ],

    xtype: 'newbutton',
	id: 'appHeader_newbutton',

    viewModel: {
        type: 'newbutton'
    },

    controller: 'newbutton',

	margin: '12 0 0 450',
	icon: 'resources/images/button/new_icon.png',
	//iconAlign: 'center',
	style: {
		background:　'none',
		border: 'none'
	},
	//arrowAlign: 'right',

	menu:　[{
		text:　'新建项目沟通',
		listeners: {
			click: 'newProjectDiscussion'
		}

	},{
		text:　'新建项目展示',
		listeners: {
			click: 'newProjectShow'
		}
	}]

});