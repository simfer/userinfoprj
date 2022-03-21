sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("my.company.pipponeapp.controller.View1", {
            onInit: function () {
                this._userModel = this.getOwnerComponent().getModel("userModel");
                let me = this;

                fetch("/checkGlobalUser")
                    .then(res => res.json())
                    .then(data => {
                        console.log("Data Result",data);
                        me._userModel.setProperty("/", data);
                        console.log(me._userModel.getProperty("/"));
                    })
                    .catch(err => console.log(err));
            }
        });
    });