/**
 * Created by wzq on 15-10-22.
 */
Ext.define('ITPAR.view.newprojectshow.NewProjectShowController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.newprojectshow',

	/**
	 * Called when the view is created
	 */
	init: function () {
	},

	setTextAreaEnable: function () {
		var radiogroup = this.lookupReference('radiogroup');
		var someIdTextarea = this.lookupReference('someIdTextarea');
        var value = radiogroup.getChecked();
		if (value[0].inputValue == 'some') {
			someIdTextarea.setDisabled(false);
		}else{
			someIdTextarea.setDisabled(true);
		}
	}
});