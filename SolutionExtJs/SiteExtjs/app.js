Ext.application({
    name: 'SiteExtjs',

    views: [
        
         'loginForm'
         //'FieldUserCenterLayout'
    ],

    controllers : [
        'UserCatalogController'
    ],

    // stores : [
    //     'CarCatalogStore'
    // ],

    launch: function () {
        var win = new Ext.Window({
        title: 'Admin Login',             
        layout:'fit',
        width:450,
        height:200,
        closable: true,
        resizable: false,              
        border: false,
        buttonAlign: 'center',
        items: {
                xtype  : 'loginForm'
            }
    });
    win.show();

    
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            //anchor:'100%',
            items: {
                //xtype  : 'FieldUser'
            }
        });
    }
});

//=============================================================================================

