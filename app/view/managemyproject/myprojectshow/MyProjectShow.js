
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

	xtype: 'myprojectshow',

	//margin: '10 00 10 10',
	autoScroll: true,
	closable: true,

	title: '我的项目展示',

	config: {
		projectshowId: null
	},

	listeners: {
		beforerender: 'loadMyProjectShowInfo'
	},

	items: [{
		html: '<h1  style="text-align:center">我的项目展示</h1>'
	}]
});
