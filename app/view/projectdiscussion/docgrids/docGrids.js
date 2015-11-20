
Ext.define("ITPAR.view.projectdiscussion.docgrids.docGrids",{
    extend: "Ext.panel.Panel",

    requires: [
        "ITPAR.view.projectdiscussion.docgrids.docGridsController",
        "ITPAR.view.projectdiscussion.docgrids.docGridsModel"
    ],

    controller: "projectdiscussion-docgrids-docgrids",
    viewModel: {
        type: "projectdiscussion-docgrids-docgrids"
    },

	xtype: 'docgrids',


    html: "Hello, World!!"
});
