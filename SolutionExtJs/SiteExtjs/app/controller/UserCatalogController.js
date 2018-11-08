// Ext.define('SiteExtjs.controller.UserCatalogController', {
//     extend: 'Ext.app.ViewController',
//     routes: {
//     	'user': 'onuser'
//     },
//     onuser: function(){
//     	var formPanel=Ext.create('Ext.form.Panel',{
//         title: 'Форма авторизации',
//         width: 300,
//         height:200,
//         layout: 'anchor',
//         defaults: {
//             anchor: '80%'
//         },
//         renderTo: Ext.getBody(),
//         items:[{
//                 xtype: 'textfield',
//                 fieldLabel: 'Логин',
//                 name: 'login',
//                 labelAlign: 'top',
//                 cls: 'field-margin',
//                 flex: 1
//                }, {
//                 xtype: 'textfield',
//                 fieldLabel: 'Пароль',
//                 name: 'password',
//                 labelAlign: 'top',
//                 cls: 'field-margin',
//                 flex: 1
//               }],       
//         // кнопки формы
//         buttons: [{
//             text: 'Оправить',
//             handler: function() {
//                 // действие отправки
//             }
//         }, {
//             text: 'Отмена',
//             handler: function() {
//                 // действие отмены
//                 }
//         }],
//     });
//     }
//     // init: function () {
//     //     this.control({

//     //     });
//     // }

// });
//============================================================================

Ext.define('SiteExtjs.controller.UserCatalogController', {
    extend: 'Ext.app.Controller',
    routes: {
    	'user': 'onuser'
    },
    onuser: function(){
    	console.log(this);
    }
    // init: function () {

    //     this.control({

    //     });
    // }

});
//=====================================================================================
// Ext.define('SiteExtjs.controller.UserCatalogController', {
//         extend : 'Ext.app.Controller',
 		

//         routes : {
//             'user' : 'onUser'
//         },
 
//         onUser : function() {
//         	console.log(this);
//         }

//         // listen : {
//         //     controller : {
//         //         '*' : {
//         //             unmatchedroute : 'onUnmatchedRoute'
//         //         }
//         //     }
//         // },
 
//         // onUnmatchedRoute : function(hash) {}
//     });