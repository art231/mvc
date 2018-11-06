// Ext.define('SiteExtjs.view.grid', {
//     extend: 'Ext.grid.Panel',
//     alias: 'widget.NamesGridPanel',
//     requires: ['Ext.grid.plugin.CellEditing', 'Ext.form.field.*'],
//     itemId: 'usersGrid',
//     // конструктор таблицы - будет вызван при создании экземпляра
//     initComponent : function() {
//         // хранилище для таблицы будет установлено в контроллере

//         // устанавливаем возможность редактирования таблицы, для
//         // добавляем плагин CellEditing
//         //======================================================================
//         // this.cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
//         //     clicksToEdit: 2
//         // });

//         //=================================================================

//     //     this.initComponent=Ext.create('Ext.form.Panel',{
//     //     title: 'Вход на сайт',
//     //     width: 300,
//     //     height:200,
//     //     frame: true,
//     //     labelAlign: 'right',
//     //     buttonAlign:'center',
//     //     labelWidth: 85,
//     //     bodyStyle:'padding:5px 5px 0',
//     //     floating: true,
        
//     //     //layout: 'anchor',
//     //     defaults: {
//     //         anchor: '80%'
//     //     },
//     //         renderTo: Ext.getBody(),
//     //         items:[{
//     //                 xtype: 'textfield',
//     //                 fieldLabel: 'Логин',
//     //                 name: 'login',
//     //                 labelAlign: 'top',
//     //                 cls: 'field-margin',
//     //                 flex: 1
//     //                }, {
//     //                 xtype: 'textfield',
//     //                 fieldLabel: 'Пароль',
//     //                 name: 'password',
//     //                 labelAlign: 'top',
//     //                 cls: 'field-margin',
//     //                 flex: 1
//     //               }],       
                     
//     //     buttons: [{
//     //         text: 'Войти',
//     //         handler: function() {
//     //             //var login = formPanel.getForm();
//     //             //console.log(e);
//     //             // for(var i in login.getValues())
//     //             // {
//     //             //     alert(login.getValues()[i]);
//     //             // }
//     //             //html:'<a href="https://siamauto.ru/">Second page</a>',
//     //         }
//     //     },


//     //     {
//     //         text: 'Регистрация',
//     //         handler: function() {
//     //             this.redirectTo('#home');
//     //             //window.location = 'http://www.google.com/';
                 
//     //             // for(var i in registration.getValues())
//     //             // {
//     //             //     alert(registration.getValues()[i]);
//     //             // }
//     //         }
//     //     }
//     //     ],
//     // });

// //====================================new===================================

//         this.plugin = this.initComponent;

//         this.columns = this.columnsGet();
//         this.tbar    = this.tbarGet();
//         // и не забываем вызывать родительский конструктор
//         this.callParent();
//     },

//     tbarGet: function(){
//         return[
//             {
//                 text: 'Добавить',
//                 iconCls: 'add',
//                 handler: this._onUserAddClick
//             },
//             {
//                 text: 'Удалить',
//                 iconCls: 'delete',
//                 handler: this._onUserDelClick
//             }
//         ]
//     },

//     columnsGet: function(){ 
//         return [
//             {
//                 text: 'Имя',
//                 field: 'textfield',
//                 dataIndex: 'firstName'
//             },
//             {
//                 text     : 'Фамилия',
//                 field: 'textfield',
//                 dataIndex: 'secondName'
//             }
//         ]
//     },

//     _onUserAddClick: function(button){
//         // код метода добавления новых записей
//     },

//     _onUserDelClick: function(button){
//         // код метода удаления выделенной записи
//     }
// });


Ext.define('SiteExtjs.view.grid', {
    extend: 'Ext.window.Window',
    alias: 'widget.bookwindow',
 
    title: 'Книга',
    layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [{
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Название'
                    },{
                        xtype: 'textfield',
                        name : 'author',
                        fieldLabel: 'Автор'
                    },{
                        xtype: 'numberfield',
                        name : 'year',
                        fieldLabel: 'Год',
                        minValue: 1,
                }]
            }];
        this.dockedItems=[{
            xtype:'toolbar',
            docked: 'top',
            items: [{
                text:'Создать',
                iconCls:'new-icon',
                action: 'new'
            },{
                text:'Сохранить',
                iconCls:'save-icon',
                action: 'save'
            },{
                text:'Удалить',
                iconCls:'delete-icon',
                action: 'delete'
            }]
        }];
        this.buttons = [{
                text: 'Очистить',
                scope: this,
                action: 'clear'
        }];
 
        this.callParent(arguments);
    }
});