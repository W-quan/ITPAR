Ext.define('ITPAR.view.main.Main', {
	extend: 'Ext.container.Container',
	xtype: 'app-main',
	id: 'appMain',

	requires: [
		'ITPAR.store.NavTreeStore',
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
		title: '导航',
		useArrows: true,
		store: Ext.create('ITPAR.store.NavTreeStore'),

		rootVisible: false,

		titleCollapse: true,
		listeners: {
			beforeexpand: 'NavTreeExpand',
			itemclick: 'onNavTreeItemClick',
			beforedestroy: function(){
				var NavTreepanel = Ext.getCmp('NavTreePanel');
				var stroe = NavTreepanel.getStore();
				stroe.removeAll();
			}
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
		id: 'center-tabpanel',

		listeners: {
			tabchange: 'centerTabpanelChange',
			remove: 'lastTabClose'
		}
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

		title: '项目开发沟通',
		hidden: true,
		xtype: 'treepanel',
		reference: 'ProjectDiscussionIssuesTree',
		id: 'ProjectDiscussionIssuesTree',
		useArrows: true,
		rootVisible: false,

		listeners: {
			beforeitemexpand: 'loadIssuesTreeChildNode',
			itemclick: 'loadTopicAbstract'
		}

	}, {
		region: 'south',
		xtype: 'footer',
		height: 50,
		split: false,
		collapsible: false
	}]

});
