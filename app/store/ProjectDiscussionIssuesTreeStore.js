/**
 * Created by wzq on 15-10-27.
 */
Ext.define('ITPAR.store.ProjectDiscussionIssuesTreeStore', {
	extend: 'Ext.data.TreeStore',

	model: 'ITPAR.model.ProjectDiscussionIssuesModel',

	config: {
		discuss: null
	}

});
