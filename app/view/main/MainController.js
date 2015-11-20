Ext.define('ITPAR.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

	requires: [
		'ITPAR.view.projectshow.ProjectShow',
		'ITPAR.view.projectdiscussion.ProjectDiscussion'
	],

	onNavTreeItemClick: function(sender, record, item, index, e, eOpts){
		if(record.parentNode.id == -1){
			this.projectShow(record);

		}else if(record.parentNode.id == -2){
			//this.addProjectDiscussionIssuesTree();
			this.projectDiscussion(record);

		}else if(record.parentNode.id == -3){

			this.myProject();
		}
    },

	//主题详情
	issuesItemClick: function(sender, record, item, index, e, eOpts){
		var centerTabPanel = this.lookupReference('center-tabpanel');
		var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');
		var discuss = IssuesTreepanel.getStore().config.discuss;
		var key = 'tab' + record.get('id');
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
	},

	//请求开发沟通一级主题
	projectDiscussion: function(record){
		var IssuesTreepanel = this.lookupReference('ProjectDiscussionIssuesTree');

		var issuesstore =  Ext.create('ITPAR.store.ProjectDiscussionIssuesTreeStore');
		issuesstore.config.discuss = record.get('id');
		issuesstore.getModel().proxy.setExtraParams({
			type: 6,
			discuss: record.get('id')
		});
		issuesstore.load();

		IssuesTreepanel.setStore(issuesstore);

		this.collapseNavTree();
		this.showIssuesTree();
		this.reLayoutCenterTabPanel("IssuesShow");
	},

	//请求二级列表
	issuesItemExpand: function (sender, eOpts) {
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
		var key = 'tab' + record.get('id');
		var tab = this.lookupReference(key);
		if (tab == null) {
			tab = centerTabPanel.add({
				xtype: 'projectshow',
				reference: key,
				config: {
					exhibit: record.id
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

	//expandNavTree: function(){
	//	var NavTreepanel = this.lookupReference('NavTreePanel');
	//	NavTreepanel.setCollapsed(false);
	//},

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
