// Ext.application({
//     requires: ['Ext.container.Viewport'],
//     name: 'SiteExtjs',
    
//     appFolder: 'app',
     
//     launch: function() {
//         Ext.create('Ext.container.Viewport', {
//             layout: 'fit',
//             items: {
//                 xtype: 'panel',
//                 html: '<h2>Библиотека</h2>'
//             }
//         });
//         var formPanel=Ext.create('Ext.form.Panel',{
//         title: 'Вход на сайт',
//         width: 300,
//         height:200,
//         frame: true,
//         labelAlign: 'right',
//         buttonAlign:'center',
//         labelWidth: 85,
//         bodyStyle:'padding:5px 5px 0',
//         floating: true,
        
//         //layout: 'anchor',
//         defaults: {
//             anchor: '80%'
//         },
//             renderTo: Ext.getBody(),
//             items:[{
//                     xtype: 'textfield',
//                     fieldLabel: 'Логин',
//                     name: 'login',
//                     labelAlign: 'top',
//                     cls: 'field-margin',
//                     flex: 1
//                    }, {
//                     xtype: 'textfield',
//                     fieldLabel: 'Пароль',
//                     name: 'password',
//                     labelAlign: 'top',
//                     cls: 'field-margin',
//                     flex: 1
//                   }],       
                     
//         buttons: [{
//             text: 'Войти',
//             handler: function() {
//                 //var login = formPanel.getForm();
//                 //console.log(e);
//                 // for(var i in login.getValues())
//                 // {
//                 //     alert(login.getValues()[i]);
//                 // }
//                 //html:'<a href="https://siamauto.ru/">Second page</a>',
//             }
//         },


//         {
//             text: 'Регистрация',
//             handler: function() {
//                 this.redirectTo('#home');
//                 //window.location = 'http://www.google.com/';
                 
//                 // for(var i in registration.getValues())
//                 // {
//                 //     alert(registration.getValues()[i]);
//                 // }
//             }
//         }
//         ],
//     });

        
//     }
// });


//====================================================================
// Ext.application({
//     name: 'SiteExtjs',

//     views: [
//         'AddCarFormView',
//         'CarCatalogView',
//         'CarGridView',
//         'SearchCarView'
//     ],

//     controllers : [
//         'CarCatalogController'
//     ],

//     stores : [
//         'CarCatalogStore'
//     ],

//     launch: function () {
//         Ext.create('Ext.container.Viewport', {
//             layout: 'fit',
//             items: {
//                 xtype  : 'carCatalogView'
//             }
//         });
//     }
// });
Ext.application({
    name: 'SiteExtjs',

    views: [
        'AddCarFormView',
        'CarCatalogView',
        'CarGridView',
        'SearchCarView'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'carCatalogView'
            }
        });
    }
});