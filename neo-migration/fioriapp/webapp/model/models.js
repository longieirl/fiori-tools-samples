sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var t=new e(n);t.setDefaultBindingMode("OneWay");return t},createCommentsModel:function(){return new e({productComments:[]})}}});