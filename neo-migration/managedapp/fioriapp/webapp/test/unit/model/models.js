sap.ui.define(["mycompany/myapp/MyWorklistApp/model/models","sap/ui/Device"],function(e,i){"use strict";QUnit.module("createDeviceModel",{afterEach:function(){this.oDeviceModel.destroy()}});function t(i,t){this.stub(sap.ui.Device,"system",{phone:t});this.oDeviceModel=e.createDeviceModel();i.strictEqual(this.oDeviceModel.getData().system.phone,t,"IsPhone property is correct")}QUnit.test("Should initialize a device model for desktop",function(e){t.call(this,e,false)});QUnit.test("Should initialize a device model for phone",function(e){t.call(this,e,true)});function o(t,o){this.stub(i,"support",{touch:o});this.oDeviceModel=e.createDeviceModel();t.strictEqual(this.oDeviceModel.getData().support.touch,o,"IsTouch property is correct")}QUnit.test("Should initialize a device model for non touch devices",function(e){o.call(this,e,false)});QUnit.test("Should initialize a device model for touch devices",function(e){o.call(this,e,true)});QUnit.test("The binding mode of the device model should be one way",function(i){this.oDeviceModel=e.createDeviceModel();i.strictEqual(this.oDeviceModel.getDefaultBindingMode(),"OneWay","Binding mode is correct")})});