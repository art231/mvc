Ext.define('SiteExtjs.controller.loginFormController', {
    extend: 'Ext.app.Controller',
    init: function() {
        var formPanel=Ext.create('Ext.form.Panel',{
        title: 'Форма авторизации',
        width: 300,
        height:200,
        autoEl:'center',
        layout: 'anchor',
        defaults: {
            anchor: '80%'
        },
        renderTo: 'content',
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
    // routes:{

    // }

});