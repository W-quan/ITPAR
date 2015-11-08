/**
 * Created by wzq on 15-10-22.
 */
Ext.define('ITPAR.view.projectshow.ProjectShow', {
    extend: 'Ext.panel.Panel',

    requires: [
	    'ITPAR.view.projectshow.ProjectShowController',
	    'ITPAR.view.projectshow.ProjectShowModel'
    ],

    xtype: 'projectshow',

	config:{
		exhibit: undefined
	},

    viewModel: {
        type: 'projectshow'
    },
    controller: 'projectshow',

	margin: '10 20 10 20',
	autoScroll: true,

	title: '项目展示',

	tpl: new Ext.XTemplate(
		'<h1  style="text-align:center">{title}</h1>',
			'<p style="text-align:center;">{publisher} {pdate}</p>',
		'<h2>项目简介</h2>' ,
			'<p style="text-indent:2em">{abstractt}</p>' ,
		'<h2>项目详细内容</h2> ' ,
			'<tpl for="details">',
				'<p style="text-indent:2em">{detail}</p>' ,
					'<div style="margin: 0 auto; text-align: center;">' ,
						'<img src="{image1}" alt="img1" width="150px" height="150px" style="margin: 5px"/>' ,
						'<img src="{image2}" alt="img2" width="150px" height="150px" style="margin: 5px"/>' ,
						'<img src="{image3}" alt="img3" width="150px" height="150px" style="margin: 5px"/>' ,
					'</div>',
			'</tpl>'
	),

	listeners: {
		render: 'tplRender'
	}
});

