(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxAbstractStorage = nx.AbstractStorage || require('next-abstract-storage');

  var NxLocalStorage = nx.declare('nx.LocalStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function(inPrefix) {
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
})();
