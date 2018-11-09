Ext.application({
    name: 'SiteExtjs',

    views: [
        
         'FieldUser',
         'FieldUserCenterLayout'
    ],

    controllers : [
        'UserCatalogController'
    ],

    // stores : [
    //     'CarCatalogStore'
    // ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'FieldUser'
            }
        });
    }
});