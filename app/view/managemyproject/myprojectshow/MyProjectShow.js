
Ext.define("ITPAR.view.managemyproject.myprojectshow.MyProjectShow",{
    extend: "Ext.panel.Panel",

    requires: [
        "ITPAR.view.managemyproject.myprojectshow.MyProjectShowController",
        "ITPAR.view.managemyproject.myprojectshow.MyProjectShowModel"
    ],

    controller: "managemyproject-myprojectshow-myprojectshow",
    viewModel: {
        type: "managemyproject-myprojectshow-myprojectshow"
    },

    html: "Hello, World!!"
});
