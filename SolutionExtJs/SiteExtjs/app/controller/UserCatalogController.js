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
    	'user': 'onuser',
    	'adminpanel': 'onadminpanel',
    	'registration': 'onRegistration'

    },

    // views: [
    //     'FieldUserCenterLayout'
    // ],
    onuser: function(){
    	// console.log(this);
    	// this.control({
     //    'FieldUserCenterLayout': {
     //         beforerender: this.loadView//use the event you want
     //     } 
    //})
    	var descAndSystem = new Ext.form.Panel ({
    		//extend:'SiteExtjs.view.FieldUser',
    		//alias: 'widget.FieldUserCenterLayout',
    		renderTo: 'FieldUser',
		    bodyPadding: 10,
		    items: [
		        {
		            xtype: 'textfield',
		            name: 'search',
		            fieldLabel: 'Введите название модели',
		            maxLength: 100
		        }
		    ]
		});
    	console.log(descAndSystem);
    	descAndSystem.show=false;

    },
    onadminpanel:function(){
		    var gridPanel = Ext.create('Ext.grid.Panel', {
		    renderTo: 'FieldUser',
		    store: {
		        fields: ['name', 'email', 'phone'],
		        sorters: ['name', 'phone']
		    },

		    columns: [
		        { text: 'Name',  dataIndex: 'name' },
		        { text: 'Email', dataIndex: 'email' }
		    ]
		});

    },
    onRegistration: function(){
	var formPanel=Ext.create('Ext.form.Panel',{
		//renderTo: 'FieldUser',
        title: 'Форма авторизации',
        width: 300,
        height:200,
        layout: 'anchor',
        defaults: {
            anchor: '80%'
        },
        renderTo: Ext.getBody(),
        items:[{
                xtype: 'textfield',
                fieldLabel: 'Логин',
                name: 'login',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1
               }, {
                xtype: 'textfield',
                fieldLabel: 'Пароль',
                name: 'password',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1
              }],       
        // кнопки формы
        buttons: [{
            text: 'Оправить',
            handler: function() {
                // действие отправки
            }
        }, {
            text: 'Отмена',
            handler: function() {
                // действие отмены
                }
        }],
    });
}

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