/**
 * Created by wzq on 15-10-28.
 */
Ext.define('ITPAR.store.DocumentsStore', {
    extend: 'Ext.data.Store',

    fields: ['title', 'abstractt', 'publisher', 'pdate'],

    //data : [
    //    {docName: 'Tommy', Description: 'Maintz',  docPerson: 'b', date: '2015-4-1'},
    //    {docName: 'Ed',    Description: 'Spencer', docPerson: 'a', date: '2015-4-1'},
    //    {docName: 'Aaron', Description: 'Conran',  docPerson: 'c', date: '2015-4-1'}
    //]

	listeners: {
		beforeload: function () {
			var view = this.getView();
		}
	},

	proxy: {
		type: 'ajax',
		url : 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
		extraParams: {
			type: 9,
			discuss: null
		},
		actionMethods: {create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'}
	}
});