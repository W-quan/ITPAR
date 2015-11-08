/**
 * Created by wzq on 15-10-18.
 */
Ext.define('ITPAR.view.footer.Footer', {
    extend: 'Ext.Container',

    requires: [
        'Ext.layout.container.HBox',
        'ITPAR.view.footer.FooterController',
        'ITPAR.view.footer.FooterModel'
    ],

    xtype: 'footer',

    viewModel: {
        type: 'footer'
    },

    controller: 'footer',

    margin: '10 0 0 0',

    //layout: {
    //    type: 'hbox',
    //    align: 'middle ',
    //    pack: 'center'
    //},
    style: {
        background: '#f3f3f3',
        boxShadow: '0px -1px 5px rgba(0, 0, 0, 0.2)',
        color: '#333C48',
        lineHeight: '50px'
    },

    html: '<a style="margin-left: 550px;">关于我们</a>' +
            '<a style="margin-left: 15px;">帮助</a>'
});