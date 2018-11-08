Ext.define('SiteExtjs.view.FieldUser', {
    extend: 'Ext.form.Panel',
    alias: 'widget.FieldUser',
    width: 400,
        height: 200,
        padding:10,
        title: 'Приложение Ext JS 4',
        layout: {
                type: 'hbox',
                align: 'stretch'
            },
        items: [{
                xtype: 'panel',
                //title: 'Первая панель',
                flex:1
            },{
                xtype: 'panel',
                //title: 'Вторая панель',
                flex: 5
            },{
                xtype: 'panel',
                //title: 'Третья панель',
                flex: 1
            }]
    

});

