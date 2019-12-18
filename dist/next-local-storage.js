/*!
 * name: @feizheng/next-local-storage
 * description: LocalStorage based on next.
 * url: https://github.com/afeiship/next-local-storage
 * version: 1.0.0
 * date: 2019-12-18 19:29:54
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractStorage = nx.AbstractStorage || require('@feizheng/next-abstract-storage');

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

//# sourceMappingURL=next-local-storage.js.map
