/**
 * Created by wzq on 15-10-27.
 */
Ext.define('ITPAR.store.ProjectDiscussionIssuesTreeStore', {
    extend: 'Ext.data.TreeStore',

    root: {
        expanded: true,
        children: [{
            text: '主题1',
            expanded: true,
            children: [{
                text: '主题1.1',
                leaf: true
            },{
                text: '主题1.2',
                leaf: true
            }]
        }, {
            text: '主题1',
            expanded: true,
            children: [{
                text: '主题1.1',
                leaf: true
            },{
                text: '主题1.2',
                leaf: true
            }]
        }, {
            text: '主题1',
            expanded: true,
            children: [{
                text: '主题1.1',
                leaf: true
            },{
                text: '主题1.2',
                leaf: true
            }]
        }]
    }
});