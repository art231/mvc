Ext.application({
    name: 'SiteExtjs',

    views: [
        'AddCarFormView',
        'CarCatalogView',
        'CarGridView',
        'SearchCarView'
    ],

    controllers : [
        'CarCatalogController'
    ],

    stores : [
        'CarCatalogStore'
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