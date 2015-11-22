Ext.define('ITPAR.view.projectdiscussion.docgrids.docGridsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.projectdiscussion-docgrids-docgrids',


	docgridsShow: function(){
		var docgrids = this.getView();
		var docStore = Ext.create('ITPAR.store.DocumentsStore');
		docStore.proxy.extraParams.discuss = docgrids.config.discuss;
		docStore.load();
		docgrids.setStore(docStore);
	},

	docDownload: function (grid, rowIndex, colIndex) {
		var docId = grid.getStore().getAt(rowIndex).get('id');
		Ext.Msg.alert('Download');
	}
});
