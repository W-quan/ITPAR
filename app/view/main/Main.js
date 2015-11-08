/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 */
Ext.define('ITPAR.view.main.Main', {
	extend: 'Ext.container.Container',
	xtype: 'app-main',
	id: 'appMain',

	requires: [
		'Ext.layout.container.Border',
		'Ext.plugin.Viewport',
		'Ext.tab.Panel',
		'Ext.tree.Panel',
		'ITPAR.store.NavTreeStore',
		'ITPAR.store.ProjectDiscussionIssuesTreeStore',
		'ITPAR.view.appheader.AppHeader',
		'ITPAR.view.footer.Footer',
		'ITPAR.view.main.MainController',
		'ITPAR.view.main.MainModel'
	],

	controller: 'main',
	viewModel: 'main',
	plugins: 'viewport',

	layout: 'border',
	style: 'background-color: #cecece',

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
		region: 'west',
		collapsible: true,
		split: true,
		width: 300,
		frame: true,
		style: {
			boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
			background: '#f3f3f3'
		},
		margin: '10 0 0 160',

		xtype: 'treepanel',
		reference: 'NavTreePanel',
		id: 'NavTreePanel',
		title: 'tree',
		useArrows: true,
		store: Ext.create('ITPAR.store.NavTreeStore'),

		rootVisible: false,

		titleCollapse: true,
		listeners: {
			//select: 'onNavTreeItemClick',
			beforeexpand: 'hiddenIssuesTree',
			itemclick: 'onNavTreeItemClick'
		}
	}, {
		region: 'center',
		collapsible: false,
		split: true,

		margin: '10 160 0 10',
		frame: true,
		style: {
			boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
			background: '#f3f3f3'
		},

		xtype: 'tabpanel',
		reference: 'center-tabpanel',
		id: 'center-tabpanel'

		//items: [{
		//	xtype: 'projectdiscussion'
		//}, {
		//	xtype: 'newprojectshow'
		//}, {
		//	xtype: 'newprojectdiscussion'
		//}]

	}, {
		region: 'east',
		collapsible: true,
		split: true,
		width: 300,
		frame: true,
		style: {
			boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
			background: '#f3f3f3'
		},
		margin: '10 0 0 0',

		hidden: true,
		xtype: 'treepanel',
		reference: 'ProjectDiscussionIssuesTree',
		id: 'ProjectDiscussionIssuesTree',
		store: Ext.create('ITPAR.store.ProjectDiscussionIssuesTreeStore'),
		useArrows: true,
		rootVisible: false
	}, {
		region: 'south',
		xtype: 'footer',
		height: 50,
		split: false,
		collapsible: false
	}]

});
