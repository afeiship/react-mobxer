(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxLocalStorage = require('../src/next-local-storage');

  describe('NxLocalStorage.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
