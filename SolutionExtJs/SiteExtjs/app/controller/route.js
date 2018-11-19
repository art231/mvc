Ext.define('SiteExtjs.controller.route', {
    extend: 'Ext.app.Controller',
    routes: {
    	'user': 'onuser',
    	'adminpanel': 'onadminpanel',
    	'registration': 'onRegistration'

    },
//====================================================



    // views: [
    //     'FieldUserCenterLayout'
    // ],
    onuser: function(){
     console.log(this);
        // this.control({
     //    'FieldUserCenterLayout': {
     //         beforerender: this.loadView//use the event you want
     //     } 
    //})
    //     var loginForm = new Ext.form.Panel ({
    //         renderTo: 'userAccess',

    //     labelWidth:100,
    //     //alias: 'widget.loginForm',
    //     //url: 'api/values',     
    //     header : false,
    //     frame:false, 
    //     title:'Login', 
    //     defaultType: 'textfield',
           
    //     //bodyStyle: 'background:url(images/login.png) no-repeat;  padding:20px;',
    //     monitorValid:true,
     
    //     items:[{ 
    //         fieldLabel:'UserID', 
    //         name: 'UserEmail',
    //         LabelWidth: 100,
    //         fieldStyle: 'background-color: #fff; background-image: none;',
    //         //allowBlank:false 
    //     },{ 
    //         fieldLabel:'Password', 
    //         name: 'Password',
    //         inputType: 'password',
    //         //width:400,
    //         //allowBlank:false 
    //     }],

    //     // All the magic happens after the user clicks the button 
    //     buttons:[{ 
    //         text:'Login',
    //         formBind: true, 
    //         // Function that fires when user clicks the button 
    //         handler:function(){ 
    //             this.redirectTo('user');
    //             // login.getForm().submit({                  
    //             //     method:'POST', 
    //             //     waitTitle:'Connecting', 
    //             //     waitMsg:'Sending data...', 
    //             //     success: function () {                     
    //             //         Ext.Msg.alert('Status', 'Login Successful!', function(btn, text){
    //             //             if (btn == 'ok'){
    //             //                 var redirect = 'Home/dashboard';
    //             //                 window.location = redirect;
    //             //             }
    //             //         });
    //             //     },

    //             //     failure:function(form, action){ 
    //             //         Ext.Msg.alert('Status', 'Login failed!'); 
    //             //     } 
    //             // }); 
    //         } 
    //     },
    //     { 
    //         text:'Registration',
    //         formBind: true, 
    //         // Function that fires when user clicks the button 
    //         handler:function(){ 
    //             // login.getForm().submit({                  
    //             //     method:'POST', 
    //             //     waitTitle:'Connecting', 
    //             //     waitMsg:'Sending data...', 
    //             //     success: function () {                     
    //             //         Ext.Msg.alert('Status', 'Login Successful!', function(btn, text){
    //             //             if (btn == 'ok'){
    //             //                 var redirect = 'Home/dashboard';
    //             //                 window.location = redirect;
    //             //             }
    //             //         });
    //             //     },

    //             //     failure:function(form, action){ 
    //             //         Ext.Msg.alert('Status', 'Login failed!'); 
    //             //     } 
    //             // }); 
    //         } 
    //     }] ,

    // });
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
//====================================================

});