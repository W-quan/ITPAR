/**
 * Created by wzq on 15-10-26.
 */
Ext.define('ITPAR.view.projectdiscussion.ProjectDiscussionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectdiscussion',

	requires: [
		'ITPAR.view.projectdiscussion.newdoc.NewDoc'
	],

	/**
     * Called when the view is created
     */
    init: function() {

    },

	onNewDocButtonClick: function(){
		Ext.create({xtype: 'newdoc'}).show();
	}
});