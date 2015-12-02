Ext.define('ITPAR.view.projectdiscussion.newchildtopic.newChildTopicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectdiscussion-newchildtopic-newchildtopic',

	setParentTopicInfo: function (sender, eOpts) {
		var centerPanel = Ext.getCmp('center-tabpanel');
		var projectdiscuss = centerPanel.getActiveTab();

		var parentTopicAbstract = this.lookupReference('parentTopicAbstract');
		var parentTopicId= this.lookupReference('parentTopicId');

		var topicDetails = projectdiscuss.lookupReference('topicDetails');

		parentTopicAbstract.setValue(topicDetails.config.topicAbstract);
		parentTopicId.setValue(topicDetails.config.topicId);
	},

	newChildTopicSubmit: function () {
		var window = this.getView();
		var formview = this.lookupReference('newChildTopicForm');
		var form = formview.getForm();
		if(form.isValid()){
			form.submit({
				url: mServerUrl,
				method: 'POST',
				params: {
					type: '11'
				},

				success: function (form, action) {
					Ext.Msg.alert('成功', '新建子主题成功');

					var ProjectDiscussionIssuesTree = Ext.getCmp('ProjectDiscussionIssuesTree');
					var store = ProjectDiscussionIssuesTree.getStore();
					store.getModel().proxy.setExtraParams({
						type: 6,
						discuss: store.config.discuss
					});
					store.load();

					window.destroy();
				},
				failure: function (form, action) {
					Ext.Msg.alert('失败', '新建子主题失败');
				}
			})
		}
	},

	closeWindows: function () {
		var window = this.getView();
		window.destroy();
	}
});
