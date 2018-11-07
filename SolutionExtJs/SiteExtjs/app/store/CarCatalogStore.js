Ext.define('SiteExtjs.store.CarCatalogStore', {
    extend: 'Ext.data.Store',
    requires : [
        'SiteExtjs.model.CarCatalogModel'
    ],
    model: 'SiteExtjs.model.CarCatalogModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'car',
            read: 'car',
            destroy: 'car',
            update: 'car'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});