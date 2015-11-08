Ext.define('ITPAR.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

	requires: [
		'ITPAR.view.projectshow.ProjectShow'
	],

	onNavTreeItemClick: function(sender, record, item, index, e, eOpts){
		if(record.parentNode.id == -1){
			this.projectShow(record);

		}else if(record.parentNode.id == -2){

			this.projectDiscussion();
		}else if(record.parentNode.id == -3){

			this.myProject();
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

	projectDiscussion: function(){
		this.collapseNavTree();
		this.showIssuesTree();
		this.reLayoutCenterTabPanel("IssuesShow");
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
