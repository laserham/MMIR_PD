(function(){'use strict';!function(n,i){"function"==typeof define&&define.amd?define(["leaflet","spin.js"],function(i,t){n(i,t);}):"object"==typeof exports?module.exports=function(i,t){return void 0===i&&(i=require("leaflet")),void 0===t&&(t=require("spin.js")),n(i,t),i}:void 0!==i&&i.L&&i.Spinner&&n(i.L,i.Spinner);}(function(n,i){var t={spin:function(n,t){n?(this._spinner||(this._spinner=new i(t).spin(this._container),this._spinning=0),this._spinning++):--this._spinning<=0&&this._spinner&&(this._spinner.stop(),this._spinner=null);}},e=function(){this.on("layeradd",function(n){n.layer.loading&&this.spin(!0),"function"==typeof n.layer.on&&(n.layer.on("data:loading",function(){this.spin(!0);},this),n.layer.on("data:loaded",function(){this.spin(!1);},this));},this),this.on("layerremove",function(n){n.layer.loading&&this.spin(!1),"function"==typeof n.layer.on&&(n.layer.off("data:loaded"),n.layer.off("data:loading"));},this);};
n.Map.include(t),n.Map.addInitHook(e);},window);}());