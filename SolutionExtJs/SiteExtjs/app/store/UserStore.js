// Ext.define('SiteExtjs.store.UserStore', {
//     extend: 'Ext.data.Store',
//     model: 'SiteExtjs.model.User',
//     autoLoad: true,
//     storeId: 'UserStore',
//     // proxy: {
//     //     type: 'ajax',
//     //     url: 'app/data/books.json',
//     //     reader: {
//     //         type: 'json',
//     //         root: 'books',
//     //         successProperty: 'success'
//     //     }
//     // }
// });

//=============================================================


// Ext.define('SiteExtjs.store.UserStore', {
//     extend: 'Ext.data.Store',
//     requires  : ['SiteExtjs.model.User', 'Ext.data.proxy.LocalStorage'],
//     model: "SiteExtjs.model.User",

//     proxy: {
//         type: 'localstorage',
//         id  : 'Names'
//     }
// });