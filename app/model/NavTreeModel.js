/**
 * Created by wzq on 15-10-21.
 */
Ext.define('ITPAR.model.NavTreeModel', {
	extend: 'Ext.data.TreeModel',

	requires: [
		'Ext.data.proxy.Ajax'
	],

	fields: [
		{name: 'id'},
		{name: 'text', mapping: 'title'}
	],

	proxy: {
		type: 'ajax',
		url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
		extraParams: {type: 1},
		actionMethods: {create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'}
	}

});