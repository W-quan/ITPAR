Ext.define('ITPAR.view.projectdiscussion.newchildtopic.newChildTopicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectdiscussion-newchildtopic-newchildtopic',

	newChildTopicSubmit: function () {
		var formview = this.getView();
		var form = formview.getForm();
		if(form.isValid()){
			form.submit({
				url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
				method: 'POST',
				params: {
					type: '11'
				},

				success: function (form, action) {
					Ext.Msg.alert('新建子主题成功');

					var ProjectDiscussionIssuesTree = Ext.getCmp('ProjectDiscussionIssuesTree');
					var store = ProjectDiscussionIssuesTree.getStore();
					store.getModel().proxy.setExtraParams({
						type: 6,
						discuss: store.config.discuss
					});
					store.load();

					form.reset();
				},
				failure: function (form, action) {
					Ext.Msg.alert('新建失败', action.result.message);
				}
			})
		}
	}
});
