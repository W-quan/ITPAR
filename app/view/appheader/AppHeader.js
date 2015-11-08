/**
 * Created by wzq on 15-10-15.
 */
Ext.define('ITPAR.view.appheader.AppHeader', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'ITPAR.view.appheader.AppHeaderController',
        'ITPAR.view.appheader.AppHeaderModel'
    ],

    xtype: 'appheader',
	id: 'HeaderPanel',

    viewModel: {
        type: 'appheader'
    },

    controller: 'appheader',

    bodyCls: 'app-header',
    layout: 'hbox',

	listeners: {
		render: 'addButton'
	},

    items: [{
        width: '200px',
        height: '50px',
        margin: '0 0 0 160',
        html: '<a href="#" style="background-color: #f3f3f3;line-height: 50px">ITPAR</a>'
    }, {
        xtype: 'textfield',
        maxHeight: '30px',
        margin: '12 0 0 50',
        autoFitErrors: false,
        width: '300px',
        name: 'seach'
    }]
});