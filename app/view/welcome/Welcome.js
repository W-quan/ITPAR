/**
 * Created by wzq on 15-10-19.
 */
Ext.define('ITPAR.view.welcome.Welcome', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.Border',
        'Ext.layout.container.VBox',
        'Ext.layout.container.VBox',
        'Ext.panel.Panel',
        'Ext.plugin.Viewport',
        'ITPAR.view.appheader.AppHeader',
        'ITPAR.view.footer.Footer',
        'ITPAR.view.register.Register',
        'ITPAR.view.welcome.WelcomeController',
        'ITPAR.view.welcome.WelcomeModel'
    ],

    id: 'welcome-view-id',
    xtype: 'welcome',

    viewModel: {
        type: 'welcome'
    },

    controller: 'welcome',

    plugins: 'viewport',
    bodyBorder: false,

    layout: 'border',

    items: [{
        xtype: 'appheader',
        region: 'north',
        collapsible: false,
        height: 50,
        style: {
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)'
        },
        split: false
    }, {
        xtype: 'panel',
        region: 'center',
        //header: false,
        //collapsible: true,
        split: false,
        frame: true,
        style: {
            boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
            background: '#f3f3f3'
        },
        html:   '<div style="margin-top: 40px; margin-left: 20px; margin-right: 20px">' +
                   '<p align="center" style="font-size: 24px; font-weight: bold;color: #4C4E54;";>' +
                        'Information Technology Produces Academic Research' +
                    '<p align="center" style="font-size: 20px">信息技术产学研平台</p>' +
                    '</p>' +
                    '<p style="text-indent:2em; font-size: 20px; letter-spacing:2px; color: #838383">' +
                        '项目成果展示 ' +
                    '</p>' +
                    '<p style="text-indent:2em; font-size: 20px; letter-spacing:2px; color: #838383; line-height: 1.2">' +
                        '项目开发沟通' +
                    '</p>' +
                '</div>',
        margin: '10 0 0 160',
	    buttons: [{
		    text: '直接进入',
		    listeners: {
			    click: 'ToProjectShowWithoutLogin'
		    }

	    }]
    }, {
        xtype: 'container',

        region: 'east',
        split: false,
        collapsible: false,

        layout: 'vbox',
        width: 300,
        margin: '10 170 00 20',

        items: [{
            xtype: 'login'
        },{
            xtype: 'register',
            margin: '20 0 80 0'
        }]
    }, {
        region: 'south',
        xtype: 'footer',
        height: 50,
        split: false,
        collapsible: false
    }]
});
