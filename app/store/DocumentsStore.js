/**
 * Created by wzq on 15-10-28.
 */
Ext.define('ITPAR.store.DocumentsStore', {
    extend: 'Ext.data.Store',

    fields: ['title', 'abstractt', 'publisher', 'pdate'],

	proxy: {
		type: 'ajax',
		url : 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
		extraParams: {
			type: 9,
			discuss: null
		},
		actionMethods: {create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'},
		reader: {
			type: 'json',
			root: 'docinfo'
		}
	}
});