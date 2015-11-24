Ext.define('ITPAR.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

	requires: [
		'ITPAR.view.projectshow.ProjectShow',
		'ITPAR.view.projectdiscussion.ProjectDiscussion'
	],

	onNavTreeItemClick: function(sender, record, item, index, e, eOpts){
		var store = Ext.getCmp('NavTreePanel').getStore();
		switch (record.parentNode.get('id')){
			case -1:
				this.projectShow(record);
				break;
			case -2:
				this.projectDiscussion(record);
				break;
			case -3:
				this.myProject();
				break;
		}
    },

	centerTabpanelChange: function(tabPanel, newCard, oldCard, eOpts){
		var oldCardTitle;
		var newCardTitle = newCard.getTitle();
		if(oldCard){
			oldCardTitle = oldCard.getTitle();
		}
		
		if(newCardTitle == '项目沟通' && oldCardTitle != '项目沟通'){
			this.addMenuToNewButton();
		}
		if(newCardTitle != '项目沟通' && oldCardTitle == '项目沟通'){
			this.removeMenufromNewButton();
		}
	},

	//添加和删除新建主题菜单
	removeMenufromNewButton: function () {
		var newbutton = Ext.getCmp('appHeader_newbutton');

		var newtopicmenu = Ext.getCmp('newTopicMenu');
		if(newtopicmenu != null){
			newbutton.getMenu().remove(newtopicmenu, true);
		}

		var newdocmenu = Ext.getCmp('newDocMenu');
		if(newdocmenu == null){
			newbutton.getMenu().remove(newdocmenu, true);
		}
	},
	
	addMenuToNewButton: function () {
		var newbutton = Ext.getCmp('appHeader_newbutton');

		var newtopicmenu = Ext.getCmp('newTopicMenu');
		if(newtopicmenu == null){
			newbutton.getMenu().add({
				text: '新建子主题',
				id: 'newTopicMenu',
				listeners: {
					click: 'newChildTopic'
				}
			});
		}

		var newdocmenu = Ext.getCmp('newDocMenu');
		if(newdocmenu == null){
			newbutton.getMenu().add({
				text: '发布新文档',
				id: 'newDocMenu',
				listeners: {
					click: 'newDoc'
				}
			});
		}
	},

	//主题详情
	loadTopicAbstract: function(sender, record, item, index, e, eOpts){
		var centerTabPanel = this.lookupReference('center-tabpanel');
		var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');
		var discuss = IssuesTreepanel.getStore().config.discuss;
		var key = 'tab' + 'projectdiscussion' + discuss;
		var tab = this.lookupReference(key);
		if (tab == null) {
			tab = centerTabPanel.add({
				xtype: 'projectdiscussion',
				reference: key,
				config: {
					topic: record.id,
					discuss: discuss
				}
			});
		}
		centerTabPanel.setActiveTab(tab);

		var topicDetails = tab.lookupReference('topicDetails');
		tab.remove(topicDetails, true);

		Ext.Ajax.request({
			url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
			params: {
				type: 8,
				topic: record.id
			},
			methods: 'POST',

			success: function (response, opts) {
				var data = Ext.decode(response.responseText);
				console.log(data);

				tab.add({
					region: 'north',
					reference: 'topicDetails',
					margin: '10 10 10 10',
					config: {
						topicId: data.topics.id,
						topicAbstract: data.topics.abstractt
					},
					html: '<h1  style="text-align:center">主题详情</h1>' +
					'<p style="text-indent:2em"> ' + data.topics.abstractt + '</p>'
				});
			},

			failure: function (response, opts) {
				console.log('server-side failure with status code ' + response.status);
			}
		});

	},

	//开发沟通
	projectDiscussion: function(record){
		this.loadIssuesTreeStore(record);

		this.collapseNavTree();
		this.showIssuesTree();
		this.reLayoutCenterTabPanel("IssuesShow");

		this.addProjectDiscussionToTab(record);
	},

	addProjectDiscussionToTab: function(record){
		var centerTabPanel = this.lookupReference('center-tabpanel');
		var key = 'tab' + 'projectdiscussion' + record.get('id');
		var tab = this.lookupReference(key);
		if (tab == null) {
			tab = centerTabPanel.add({
				xtype: 'projectdiscussion',
				reference: key,
				config: {
					//topic: -1,
					discuss: record.get('id')
				}
			});
		}
		centerTabPanel.setActiveTab(tab);
	},

	//请求开发沟通一级主题
	loadIssuesTreeStore: function(record){
		var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');

		var	issuesStore =  Ext.create('ITPAR.store.ProjectDiscussionIssuesTreeStore');
		issuesStore.config.discuss = record.get('id');
		issuesStore.getModel().proxy.setExtraParams({
			type: 6,
			discuss: record.get('id')
		});
		issuesStore.load();
		IssuesTreepanel.setStore(issuesStore);
	},

	//请求开发沟通二级列表
	loadIssuesTreeChildNode: function (sender, eOpts) {
		if(sender.id != 'root'){
			var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');
			var issuesStore = IssuesTreepanel.getStore();
			var issuesModel = issuesStore.getModel();
			issuesModel.proxy.setExtraParams( {
				type: 7,
				topic: sender.get('id')
			});
		}
	},

	projectShow: function(record){
		var centerTabPanel = this.lookupReference('center-tabpanel');
		var key = 'tab' + 'projectShow' + record.get('id');
		var tab = this.lookupReference(key);
		if (tab == null) {
			tab = centerTabPanel.add({
				xtype: 'projectshow',
				reference: key,
				config: {
					exhibit: record.get('id')
				}
			});
		}
		centerTabPanel.setActiveTab(tab);

	},


	myProject: function(){

	},

	reLayoutCenterTabPanel: function(IssuesTreeStatus){
		var centerTabPanel = this.lookupReference('center-tabpanel');
		if(IssuesTreeStatus == "IssuesShow"){
			centerTabPanel.setMargin('10 10 0 10');
		}else if(IssuesTreeStatus == "IssuesTreeHiddin"){
			centerTabPanel.setMargin('10 160 0 10');
		}
	},


	collapseNavTree: function(){
		var NavTreepanel = this.lookupReference('NavTreePanel');
		NavTreepanel.setCollapsed(true);
	},

	showIssuesTree: function(){
		var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');
		IssuesTreepanel.setHidden(false);
	},

	hiddenIssuesTree: function(){
		var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');
		IssuesTreepanel.setHidden(true);

		this.reLayoutCenterTabPanel("IssuesTreeHiddin")
	}
});
