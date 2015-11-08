/**
 * Created by wzq on 15-10-26.
 */
Ext.define('ITPAR.view.projectdiscussion.ProjectDiscussion', {
    extend: 'Ext.Container',

    requires: [
	    'Ext.button.Button',
	    'Ext.grid.Panel',
	    'Ext.grid.column.Action',
	    'Ext.layout.container.HBox',
	    'Ext.panel.Panel',
	    'ITPAR.store.DocumentsStore',
	    'ITPAR.view.projectdiscussion.ProjectDiscussionController',
	    'ITPAR.view.projectdiscussion.ProjectDiscussionModel'
    ],

    xtype: 'projectdiscussion',
	title: '项目沟通',

    viewModel: {
        type: 'projectdiscussion'
    },

    controller: 'projectdiscussion',

	margin: '10 20 10 20',
	autoScroll: true,

	items: [{
		html: '<h1  style="text-align:center">主题详情</h1>' +
					'<p style="text-indent:2em">详细描述</p>'
	},{
		xtype: 'grid',
		title: '项目文档',
		tools: [{
			xtype: 'button',
			text: '发布新文档',
			listeners: {
				click: 'onNewDocButtonClick'
			}
		}],
		store: Ext.create('ITPAR.store.DocumentsStore'),

		columns: [
			{ text: '文档名称', dataIndex: 'docName', flex: 1 },
			{ text: '文档简要内容描述', dataIndex: 'Description', flex: 1},
			{ text: '文档发布人', dataIndex: 'docPerson', flex: 1 },
			{ text: '发布日期', dataIndex: 'date', flex: 1 },
			{
				text: '下载文档',
				xtype: 'actioncolumn',
				sortable: false,
				align: 'center',
				items: [{
					icon: 'resources/images/download_icon.png',
					iconCls: 'array-grid-sell-col',
					tooltip: '点击下载',
					handler: function (grid, rowIndex, colIndex) {
						//var rec = grid.getStore().getAt(rowIndex);
						Ext.Msg.alert('Download');
					}
				}]
			}
		]
	}]
});

