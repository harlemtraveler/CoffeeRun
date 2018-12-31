(function (window) {
  'use strict';
  const App = window.App || {};

  function DataStore() {
    this.data = {};
  }

  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  }

  DataStore.prototype.get = function(key) {
    return this.data[key];
  }

  DataStore.prototype.addAll = function() {
    return this.data;
  }

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);
