/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.projectdiscussion.newdoc.NewDocController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newdoc',

    /**
     * Called when the view is created
     */

	newDocSubmit: function () {
	    var centerPanel = Ext.getCmp('center-tabpanel');
	    var projectdiscussion = centerPanel.getActiveTab();
	    var discuss = projectdiscussion.config.discuss;

	    var formview = this.lookupReference('newdocform');
	    var form = formview.getForm();
	    if (form.isValid()) {
		    form.submit({
			    url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
			    method: 'POST',
			    params: {
				    type: '12',
				    discuss: discuss
			    },

			    success: function (form, action) {
				    Ext.Msg.alert('发布成功');
				    form.reset();
			    },

			    failure: function (form, action) {
				    Ext.Msg.alert('发布失败');
			    }
		    });
	    }
    },

	closeWindows: function () {
		var window = this.getView();
		window.destroy();
	}
});