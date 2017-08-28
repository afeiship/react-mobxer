(function () {

  'use strict';

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var NxAbstractStorage = nx.AbstractStorage || require('next-abstract-storage');

  var NxLocalStorage = nx.declare('nx.LocalStorage', {
    extends: NxAbstractStorage,
    methods:{
      init: function(inPrefix){
        this.base({
          engine: global.localStorage,
          prefix: inPrefix || ''
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxLocalStorage;
  }

}());
