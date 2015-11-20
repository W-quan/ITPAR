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
		var centerPanel = Ext.getCmp('center-tabpanel');
		var tab = centerPanel.add({
			xtype: 'newprojectdiscussion'
		});
		centerPanel.setActiveTab(tab);
	},

	newProjectShow: function(){
		var centerPanel = Ext.getCmp('center-tabpanel');
		var tab = centerPanel.add({
			xtype: 'newprojectshow'
		});
		centerPanel.setActiveTab(tab);
	}
});