/**
 * Created by wzq on 15-10-21.
 */
Ext.define('ITPAR.store.NavTreeStore', {
	extend: 'Ext.data.TreeStore',
	alias: 'store.navitreestore',

	model: 'ITPAR.model.NavTreeModel',

	listeners: {
		beforeload: function () {
			var model = this.getModel();
			if (User_Info.Logined == true){
				model.proxy.extraParams.type = 5;
			}else {
				model.proxy.extraParams.type = 1;
			}
		}
	}
});