//ApplicationRouter router=new ApplicationRouter.initRouter();


Ext.define('SiteExtjs.controller.CarCatalogController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({

        });
    },
    routes : {
        'user' : 'onUsers',
        'registration': 'onRegistration',
        'adminpanel':'onAdminPanel'
    },

    onUsers : function() {
        //...
        console.log(this);
        
//     var formPanel=Ext.create('Ext.form.Panel',{
//         title: 'Форма авторизации',
//         width: 300,
//         height:200,
//         autoEl:'center',
//         layout: 'anchor',
//         defaults: {
//             anchor: '80%'
//         },
//         renderTo: 'content',
//         //autoEl:'center',
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
//             text: 'Логин',
//             handler: function() {
//                 var login = formPanel.items.get(0);
//                 alert(login.getValue());
//                 }
//         }],
   
// });
	     //var router=   ApplicationRouter.initRouter();
	    //console.log(router);
	  

    },
    onRegistration : function() {
    	//console.log(this);
//     	Ext.create('Ext.form.Panel', {
//     renderTo: 'content',
//     title: 'User Form',
//     height: 400,
//     width: 300,
//     bodyPadding: 10,
//     layout: {
//         type: 'vbox',
//         align: 'center'
//         //pack: 'center'
//     },
//         //position:'absolute',
//      //fieldLabel:200,
//     defaultType: 'textfield',
//     items: [{
//             xtype: 'textfield',
//             name: 'username',
//             fieldLabel: 'Username',

//             // anchor : '95%',
//             // labelWidth : 150
//             //width: '450px'
//             // fieldDefaults: {
//             //     labelWidth: 200
//             // }
//            	//width: '100px'
//             //allowBlank: false
//             //maxLength: 100,
//             //maxWidth: '300px'
//             //labelWidth: 200
//         },
//         {
//             xtype: 'textfield',
//             name: 'username',
//             fieldLabel: 'Username',

//             // anchor : '95%',
//             // labelWidth : 150
//             //width: '450px'
//             // fieldDefaults: {
//             //     labelWidth: 200
//             // }
//            	//width: '100px'
//             //allowBlank: false
//             //maxLength: 100,
//             //maxWidth: '300px'
//             //labelWidth: 200
//         }, 
//         {
//             xtype: 'textfield',
//             name: 'username',
//             fieldLabel: 'Username',

//             // anchor : '95%',
//             // labelWidth : 150
//             //width: '450px'
//             // fieldDefaults: {
//             //     labelWidth: 200
//             // }
//            	//width: '100px'
//             //allowBlank: false
//             //maxLength: 100,
//             //maxWidth: '300px'
//             //labelWidth: 200
//         }, 
//         {
//             xtype: 'textfield',
//             name: 'username',
//             fieldLabel: 'Username',

//             // anchor : '95%',
//             // labelWidth : 150
//             //width: '450px'
//             // fieldDefaults: {
//             //     labelWidth: 200
//             // }
//            	//width: '100px'
//             //allowBlank: false
//             //maxLength: 100,
//             //maxWidth: '300px'
//             //labelWidth: 200
//         }, 
//         {
//             xtype: 'textfield',
//             name: 'username',
//             fieldLabel: 'Username',

//             // anchor : '95%',
//             // labelWidth : 150
//             //width: '450px'
//             // fieldDefaults: {
//             //     labelWidth: 200
//             // }
//            	//width: '100px'
//             //allowBlank: false
//             //maxLength: 100,
//             //maxWidth: '300px'
//             //labelWidth: 200
//         }, 
//         {
//             xtype: 'textfield',
//             name: 'username',
//             fieldLabel: 'Username',

//             // anchor : '95%',
//             // labelWidth : 150
//             //width: '450px'
//             // fieldDefaults: {
//             //     labelWidth: 200
//             // }
//            	//width: '100px'
//             //allowBlank: false
//             //maxLength: 100,
//             //maxWidth: '300px'
//             //labelWidth: 200
//         },  {
//             xtype: 'textfield',
//             name: 'password',
//             inputType: 'password',
//             fieldLabel: 'Password'
//             //width: 300
//             //allowBlank: false
//          }
//          // {
//         //     xtype: 'displayfield',
//         //     hideEmptyLabel: false,
//         //     value: 'Enter any non-blank password'
//         // }
//         ]      
// });
    },
    onAdminPanel : function() {
    	//console.log(Ext.Controller);
    }


});