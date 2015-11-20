Ext.define('ITPAR.view.projectdiscussion.docgrids.docGridsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectdiscussion-docgrids-docgrids',


	docgridsShow: function(){
		var docgrids = this.getView();
		var docStore = Ext.create('ITPAR.store.DocumentsStore');
		docStore.proxy.extraParams.discuss = docgrids.config.discuss;
		docStore.load();
		docgrids.setStore(docStore);
	}
});
