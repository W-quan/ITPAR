/**
 * Created by wzq on 15-10-28.
 */
Ext.define('ITPAR.store.DocumentsStore', {
    extend: 'Ext.data.Store',

    /*
    Uncomment to use a specific model class
    model: 'User',
    */

    fields: ['docName', 'Description', 'docPerson', 'date'],

    data : [
        {docName: 'Tommy', Description: 'Maintz',  docPerson: 'b', date: '2015-4-1'},
        {docName: 'Ed',    Description: 'Spencer', docPerson: 'a', date: '2015-4-1'},
        {docName: 'Aaron', Description: 'Conran',  docPerson: 'c', date: '2015-4-1'}
    ]
});