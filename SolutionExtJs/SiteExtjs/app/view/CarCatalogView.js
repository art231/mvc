// Ext.define('SiteExtjs.app.view.loginForm' ,{
//     extend: 'Ext.form.Panel',
//     alias: 'widget.loginform',
 
//     title: 'Вход на сайт',
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
                     
//             buttons: [{
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
// });


//====================================================================



// Ext.define('SiteExtjs.view.CarCatalogView', {
//     extend: 'Ext.panel.Panel',
//     width: 500,
//     height: 360,
//     padding: 10,
//     alias: 'widget.carCatalogView',
//     layout: 'border',
//     items: [
//         {
//             xtype: 'carGridView',
//             region: 'center'
//         },
//         {
//             xtype: 'panel',
//             html: '<div style="font: normal 18px cursive"><center><font size = "10">Каталог автомобилей</font></center></div>',
//             region: 'north',
//             height: 80
//         },
//         {
//             xtype: 'searchCarView',
//             title: 'Поиск',
//             region: 'west',
//             width: 300,
//             collapsible: true,
//             collapsed: false
//         }
//     ],
//     renderTo: Ext.getBody()
// });