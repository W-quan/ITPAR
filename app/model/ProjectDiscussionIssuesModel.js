/**
 * Created by wzq on 15-11-12.
 */

Ext.define('ITPAR.model.ProjectDiscussionIssuesModel', {
	extend: 'Ext.data.TreeModel',

	fields: [
		{name: 'id'},
		{name: 'text', mapping: 'title'}
	],

	proxy: {
		type: 'ajax',
		url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
		extraParams: {
			type: 6,
			discuss: null
		},
		actionMethods: {create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'}
	}
});
