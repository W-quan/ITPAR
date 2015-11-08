/**
 * Created by wzq on 15-11-2.
 */
Ext.define('ITPAR.view.appheader.loginbutton.LoginButtonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginbutton',

    /**
     * Called when the view is created
     */
    init: function() {

    },

	goToWelcomeView: function(){
		var main = Ext.getCmp('appMain');
		if(main != null){
			main.destroy();

			Ext.create({
				xtype: 'welcome'
			});
		}
	}
});