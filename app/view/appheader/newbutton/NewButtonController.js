/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.appheader.newbutton.NewButtonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newbutton',

    /**
     * Called when the view is created
     */
    init: function() {
    },

	newProjectDiscussion: function () {
		var appmain = Ext.getCmp('appMain');
		var centerPanel = Ext.getCmp('center-tabpanel');
		var newprojectdiscussion= appmain.lookupReference('newProjectDiscussion');
		if(newprojectdiscussion == null){
			newprojectdiscussion = centerPanel.add({
				xtype: 'newprojectdiscussion',
				reference: 'newProjectDiscussion'
			});
		}
		centerPanel.setActiveTab(newprojectdiscussion);
	},

	newProjectShow: function(){
		var appmain = Ext.getCmp('appMain');
		var centerPanel = Ext.getCmp('center-tabpanel');
		var newprojectshow = appmain.lookupReference('newProjectShow');
		if(newprojectshow == null){
			newprojectshow = centerPanel.add({
				xtype: 'newprojectshow',
				reference: 'newProjectShow'
			});
		}
		centerPanel.setActiveTab(newprojectshow);
	},

	newChildTopic: function(){
		Ext.create({
			xtype: 'newchildtopic'
		}).show();
	},

	newDoc: function () {
		Ext.create({
			xtype: 'newdoc'
		}).show();
	}
});