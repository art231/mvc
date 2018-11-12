Ext.define('SiteExtjs.view.loginForm', {
    extend: 'Ext.form.Panel',



        labelWidth:100,
        alias: 'widget.loginForm',
        //url: 'api/values',     
        header : false,
        frame:false, 
        title:'Login', 
        defaultType: 'textfield',
           
        //bodyStyle: 'background:url(images/login.png) no-repeat;  padding:20px;',
        monitorValid:true,
     
        items:[{ 
            fieldLabel:'UserID', 
            name: 'UserEmail',
            LabelWidth: 100,
            fieldStyle: 'background-color: #fff; background-image: none;',
            //allowBlank:false 
        },{ 
            fieldLabel:'Password', 
            name: 'Password',
            inputType: 'password',
            //width:400,
            //allowBlank:false 
        }],

        // All the magic happens after the user clicks the button 
        buttons:[{ 
            text:'Login',
            formBind: true, 
            // Function that fires when user clicks the button 
            handler:function(){ 
                this.redirectTo('user');
                // login.getForm().submit({                  
                //     method:'POST', 
                //     waitTitle:'Connecting', 
                //     waitMsg:'Sending data...', 
                //     success: function () {                     
                //         Ext.Msg.alert('Status', 'Login Successful!', function(btn, text){
                //             if (btn == 'ok'){
                //                 var redirect = 'Home/dashboard';
                //                 window.location = redirect;
                //             }
                //         });
                //     },

                //     failure:function(form, action){ 
                //         Ext.Msg.alert('Status', 'Login failed!'); 
                //     } 
                // }); 
            } 
        },
        { 
            text:'Registration',
            formBind: true, 
            // Function that fires when user clicks the button 
            handler:function(){ 
                // login.getForm().submit({                  
                //     method:'POST', 
                //     waitTitle:'Connecting', 
                //     waitMsg:'Sending data...', 
                //     success: function () {                     
                //         Ext.Msg.alert('Status', 'Login Successful!', function(btn, text){
                //             if (btn == 'ok'){
                //                 var redirect = 'Home/dashboard';
                //                 window.location = redirect;
                //             }
                //         });
                //     },

                //     failure:function(form, action){ 
                //         Ext.Msg.alert('Status', 'Login failed!'); 
                //     } 
                // }); 
            } 
        }] ,

    });