/*!
 * name: @jswork/next-local-storage
 * description: LocalStorage based on next.
 * homepage: https://github.com/afeiship/next-local-storage
 * version: 1.0.0
 * date: 2020-11-22 14:00:51
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var NxAbstractStorage = nx.AbstractStorage || require('@jswork/next-abstract-storage');

  var NxLocalStorage = nx.declare('nx.LocalStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function (inPrefix) {
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
