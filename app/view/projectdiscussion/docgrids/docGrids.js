
Ext.define("ITPAR.view.projectdiscussion.docgrids.docGrids",{
    extend: "Ext.grid.Panel",

    requires: [
        "ITPAR.view.projectdiscussion.docgrids.docGridsController",
        "ITPAR.view.projectdiscussion.docgrids.docGridsModel"
    ],

    controller: "projectdiscussion-docgrids-docgrids",
    viewModel: {
        type: "projectdiscussion-docgrids-docgrids"
    },

	xtype: 'docgrids',

	title: '项目文档',

	config: {
		discuss: null
	},

	frame: true,
	style: 'border-color: #cecece',

	//tools: [{
	//	xtype: 'button',
	//	text: '发布新文档',
	//	listeners: {
	//		click: 'onNewDocButtonClick'
	//	}
	//}],

	listeners: {
		render: 'docgridsShow'
	},

	columns: [
		{text: '文档名称', dataIndex: 'title', flex: 1},
		{text: '文档简要内容描述', dataIndex: 'abstractt', flex: 1},
		{text: '文档发布人', dataIndex: 'publisher', flex: 1},
		{text: '发布日期', dataIndex: 'pdate', flex: 1},
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
					var docId = grid.getStore().getAt(rowIndex).get('id');

					var form = Ext.create('Ext.form.Panel', {
						standardSubmit: true,
						url: 'http://127.0.0.1:8080/FinalPublishingPlatform/broker',
						method: 'POST'
					});

					form.submit({
						params: {
							type: 10,
							doc: docId
						}
					});
				}
			}]
		}
	]
});
