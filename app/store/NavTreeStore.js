/**
 * Created by wzq on 15-10-21.
 */
Ext.define('ITPAR.store.NavTreeStore', {
    extend: 'Ext.data.TreeStore',

    //alias: 'store.navitreestore',

	requires: [
		'ITPAR.model.NavTreeModel',
		'ITPAR.store.NavTreeStoreController'
	],

    model: 'ITPAR.model.NavTreeModel',

	//root: {
	//	text: '信息技术产学研协同工作平台',
	//	id: '-2',
	//	expanded: true
	//},



});

//controller: 'NavTreeStoreController',
//autoLoad: true,
//listeners: {
//	beforeload: 'setType'
//},

//root: {
//   text: '信息技术产学研协同工作平台',
//   id: '-2',
//   catalog: '0',
//  expanded: true,
//children: [{
//    text: '项目成果展示',
//    expanded: true,
//    children: [{
//        text: '成果1',
//        leaf: true
//    },{
//        text: '成果2',
//        leaf: true
//    }]
//}, {
//    text: '项目开发沟通',
//    expanded: true,
//    children: [{
//        text: '沟通1',
//        leaf: true
//    }, {
//        text: '沟通2',
//        leaf: true
//    }]
//}, {
//    text: '我的项目',
//    expanded: true,
//    children: [{
//        text: '我的沟通项目',
//        leaf: true
//    }, {
//        text: '我的展示项目',
//        leaf: true
//    }]
//}]
//},
