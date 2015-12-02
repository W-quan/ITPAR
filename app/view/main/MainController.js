Ext.define('ITPAR.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

	requires: [
		'ITPAR.view.projectshow.ProjectShow',
		'ITPAR.view.projectdiscussion.ProjectDiscussion',
		'ITPAR.store.ProjectDiscussionIssuesTreeStore'
	],

	onNavTreeItemClick: function(sender, record, item, index, e, eOpts){
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
			case -4:
				this.myProjectDiscussion(record);
				break;
			case -5:
				this.myProjectShow(record);
				break;
		}
    },

	myProjectShow: function(record){
		var centerTabPanel = this.lookupReference('center-tabpanel');
		var key = 'tab' + 'myProjectShow' + record.get('id');
		var tab = this.lookupReference(key);
		if (tab == null) {
			tab = centerTabPanel.add({
				xtype: 'myprojectshow',
				reference: key,
				config: {
					projectshowId: record.get('id')
				}
			});
		}
		centerTabPanel.setActiveTab(tab);
	},

	myProjectDiscussion: function (record) {
		var centerTabPanel = this.lookupReference('center-tabpanel');
		var key = 'tab' + 'myProjectDiscussion' + record.get('id');
		var tab = this.lookupReference(key);
		if (tab == null) {
			tab = centerTabPanel.add({
				xtype: 'myprojectdiscussion',
				reference: key,
				config: {
					discussId: record.get('id')
				}
			});
		}
		centerTabPanel.setActiveTab(tab);
	},

	centerTabpanelChange: function(tabPanel, newCard, oldCard, eOpts){
		var oldCardTitle;
		var newCardTitle = newCard.getTitle();
		if(oldCard){
			oldCardTitle = oldCard.getTitle();
		}
		
		if(newCardTitle == '项目沟通' && oldCardTitle != '项目沟通'){
			this.addMenuToNewButton();

			this.showIssuesTree(true);
			this.collapseNavTree(true);
			this.reLayoutCenterTabPanel('IssuesTreeShow');
		}
		if(newCardTitle != '项目沟通'){
			this.removeMenufromNewButton();
		}

		if(newCardTitle == '项目沟通' && oldCardTitle == '项目沟通'){
			this.replaceIssuesTreeStroe(newCard);
		}
		if(newCardTitle != '项目沟通' && oldCardTitle == '项目沟通'){
			this.showIssuesTree(false);
			this.reLayoutCenterTabPanel('IssuesTreeHiddin');
		}
	},

	replaceIssuesTreeStroe: function (ProjectDiscussion) {
		var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');
		IssuesTreepanel.setStore(ProjectDiscussion.config.topicTreeStore);
	},

	//最后一个tab关闭后,不能用centerTabpanelChange方法remove 添加的菜单
	//所以添加这个方法,判断最后一个tab关闭.remove菜单
	lastTabClose: function () {
		var centerTabPanel = this.lookupReference('center-tabpanel');
		var tab = centerTabPanel.getActiveTab();
		if(tab == undefined){
			this.removeMenufromNewButton();

			this.showIssuesTree(false);
			this.collapseNavTree(false);
			this.reLayoutCenterTabPanel('IssuesTreeHiddin')
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
		if(newdocmenu != null){
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
		var tab = centerTabPanel.getActiveTab();
		var topicDetails = tab.lookupReference('topicDetails');
		tab.remove(topicDetails, true);

		Ext.Ajax.request({
			url: mServerUrl,
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
		var issuesStore = this.loadIssuesTreeStore(record.get('id'));

		this.collapseNavTree(true);
		this.showIssuesTree(true);
		this.reLayoutCenterTabPanel("IssuesTreeShow");

		this.addProjectDiscussionToTab(record.get('id'), issuesStore);
	},

	addProjectDiscussionToTab: function(id, issuesStore){
		var centerTabPanel = this.lookupReference('center-tabpanel');
		var key = 'tab' + 'projectdiscussion' + id;
		var tab = this.lookupReference(key);
		if (tab == null) {
			tab = centerTabPanel.add({
				xtype: 'projectdiscussion',
				reference: key,
				config: {
					discuss: id,
					topicTreeStore: issuesStore
				}
			});
		}
		centerTabPanel.setActiveTab(tab);
	},

	//请求开发沟通一级主题
	loadIssuesTreeStore: function(id){
		var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');

		var	issuesStore =  Ext.create('ITPAR.store.ProjectDiscussionIssuesTreeStore');
		issuesStore.config.discuss = id;
		issuesStore.getModel().proxy.setExtraParams({
			type: 6,
			discuss: id
		});
		issuesStore.load();
		IssuesTreepanel.setStore(issuesStore);

		return issuesStore;
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
		if(IssuesTreeStatus == "IssuesTreeShow"){
			centerTabPanel.setMargin('10 10 0 10');
		}else if(IssuesTreeStatus == "IssuesTreeHiddin"){
			centerTabPanel.setMargin('10 160 0 10');
		}
	},


	collapseNavTree: function(bool){
		var NavTreepanel = this.lookupReference('NavTreePanel');
		if(bool){
			NavTreepanel.setCollapsed(true);
		}else {
			NavTreepanel.setCollapsed(false);
		}
	},

	showIssuesTree: function(bool){
		var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');
		if(bool){
			IssuesTreepanel.setHidden(false);
		}else {
			IssuesTreepanel.setHidden(true);
		}
	},

	NavTreeExpand: function () {
		this.showIssuesTree(false);
		this.reLayoutCenterTabPanel('IssuesTreeHiddin');
	}
});
