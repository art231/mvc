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
        // Ext.create('Ext.container.Viewport', {
        //     layout: 'fit',
        //     items: {
        //         xtype  : 'carCatalogView'
        //     }
        // });

<<<<<<< HEAD
        // var window = Ext.create('Ext.window.Window', {
        //     title: 'Приложение',
        //     width: 300,
        //     height: 200,
        //     items:[{
        //             xtype: 'textfield',
        //             fieldLabel: 'Логин',
        //             name: 'login',
        //             labelAlign: 'top',
        //             //cls: 'field-margin',
        //             flex: 1
        //            }, {
        //             xtype: 'textfield',
        //             fieldLabel: 'Пароль',
        //             name: 'password',
        //             labelAlign: 'top',
        //             //cls: 'field-margin',
        //             flex: 1
        //           }],       
        // // кнопки формы
        // buttons: [{
        //     text: 'Оправить',
        //     handler: function() {
        //         // действие отправки
        //     }
        // }, {
        //     text: 'Отмена',
        //     handler: function() {
        //         // действие отмены
        //         }
        // }]
        // });
        // window.show();
=======
        var window = Ext.create('Ext.window.Window', {
            title: 'Приложение',
            width: 300,
            height: 200,
            items:[{
                    xtype: 'textfield',
                    fieldLabel: 'Логин',
                    name: 'login',
                    labelAlign: 'top',
                    //cls: 'field-margin',
                    flex: 1
                   }, {
                    xtype: 'textfield',
                    fieldLabel: 'Пароль',
                    name: 'password',
                    labelAlign: 'top',
                    //cls: 'field-margin',
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
        }]
        });
        window.show();
>>>>>>> master
    }
});
