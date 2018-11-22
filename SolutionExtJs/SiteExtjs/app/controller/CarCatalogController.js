Ext.define('SiteExtjs.controller.CarCatalogController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({

        });
    },
    routes : {
        'user' : 'onUsers',
        'registration':'onRegistration'
    },

    onUsers : function() {
        //...
        console.log("hello");
	        

	  var formPanel=Ext.create('Ext.form.Panel',{
        title: 'Форма авторизации',
        width: 400,
        height:200,
        //region:'center',
        //layout: 'anchor',
        layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center',
        //anchor:'100%'

    },
        //position:'absolute',
        // defaults: {
        //     anchor: '80%'
        // },
        renderTo: 'content',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            //anchor:'100%'
            // anchor : '95%',
            // labelWidth : 150
            //width: '450px'
            // fieldDefaults: {
            //     labelWidth: 200
            // }
           	//width: '100px'
            //allowBlank: false
            //maxLength: 100
            //maxWidth: '300px'
            //labelWidth: 200
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            //anchor:'100%'
            //width: 300
            //allowBlank: false
         }
         // {
        //     xtype: 'displayfield',
        //     hideEmptyLabel: false,
        //     value: 'Enter any non-blank password'
        // }
        ],      
        // кнопки формы
        buttons: [{
            text: 'Оправить',
            handler: function() {
                // действие отправки
            }
        }, {
            text: 'Логин',
            handler: function() {
                var login = formPanel.items.get(0);
                alert(login.getValue());
                }
        }],
    });


    },
    onRegistration : function() {
    	
    }


});