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

	//proxy: {
	//	type: 'ajax',
	//	url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
	//	extraParams: {type: 1},
	//	actionMethods: {create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'}
	//}
	//root: {
	//	text: '信息技术产学研协同工作平台',
	//	id: '-2',
	//	expanded: true
	//},


});